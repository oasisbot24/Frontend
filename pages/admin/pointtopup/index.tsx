import { putAdminPointTopup } from '@api/admin/pointTopup';
import AdminFrame from '@components/admin/adminFrame';
import Table from '@components/table/table';
import TableController from '@components/table/tableController';
import TableNav from '@components/table/tableNav';
import { PointTopupType } from '@interfaces/pointTopup';
import { createAdminPointTopups } from '@lib/page/adminPointTopup';
import useToken from '@lib/useToken';
import { useState, useEffect } from 'react';

function setPointTopupsCondition(index : number, condition : number, setPointTopups : Function) {
  setPointTopups((prev : PointTopupType[])=>{
    const new_prev = [...prev];
    new_prev[index].condition = condition;
    return new_prev;
  });
}

function PendingPoint({index, userid, setPointTopups} : {index : number, userid : number, setPointTopups : Function}) {
  const {token} = useToken();
  const Submit = async ()=>{
    try {
      setPointTopupsCondition(index, 3, setPointTopups);
      await putAdminPointTopup(userid, true, token);
      setPointTopupsCondition(index, 1, setPointTopups);
    } catch (error) {
      setPointTopupsCondition(index, 0, setPointTopups);
    }
  }
  const Deny = async ()=>{
    try {
      setPointTopupsCondition(index, 3, setPointTopups);
      await putAdminPointTopup(userid, false, token);
      setPointTopupsCondition(index, 2, setPointTopups);
    } catch (error) {
      setPointTopupsCondition(index, 0, setPointTopups);
    }
  }
  return (
    <div className='flex justify-center text-center'>
      <button className='btn px-2 text-xs rounded btn-blue-200 mr-4 min-w-[60px] h-[30px] leading-[30px]'
      onClick={Submit}>
        Premit
      </button>
      <button className='btn px-2 text-xs rounded btn-red min-w-[60px] h-[30px] leading-[30px]'
      onClick={Deny}>
        Deny
      </button>
    </div>
  );
}

function getControl(index : number, condition : number, id: number, setPointTopups : Function) {
  let node : JSX.Element;
  if (condition == 0)
    node = (<PendingPoint index={index} userid={id} setPointTopups={setPointTopups} />);
  else if (condition == 1)
    node = (<div className='text-center font-bold text-black'>충전됨</div>);
  else if (condition == 2)
    node = (<div className='text-center font-bold text-red'>거부됨</div>);
  else if (condition == 3)
    node = (<div className='text-center font-bold text-gray-400'>Pending</div>);
  else
    node = (<></>)

  return node;
}

export default function Home() {
  const thead = ["index", "User", "Date", "Amount", "Tag", "Control"];
  const [tbody, setTbody] = useState<any[][]>([]);
  const [pointTopups, setPointTopups] = useState<PointTopupType[]>([]);
  const {token} = useToken();
  useEffect(()=>{
    createAdminPointTopups(token, setPointTopups);
  }, []);
  useEffect(()=>{
    const new_pointTopups : any[][] = [];
    if (pointTopups.length === 0) return setTbody([]);
    pointTopups.map((pointTopup, index)=>{
      new_pointTopups.push([
        (index+1).toString(),
        pointTopup.user.nick_name,
        pointTopup.create_date,
        pointTopup.amount,
        pointTopup.tag,
        getControl(index, pointTopup.condition, pointTopup.user.id, setPointTopups)
      ]);
    });
    setTbody(new_pointTopups);
  }, [pointTopups]);
  return (
    <AdminFrame currnetMenu='PointTopup'>
      <div className='mt-8'>
        <TableNav className="mb-8" />
        <div className='table_parent'>
          <Table thead={thead} tbody={tbody} className='table_admin'/>
        </div>
        <TableController />
      </div>
    </AdminFrame>
  )
}
