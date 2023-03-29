import AdminFrame from '@components/admin/adminFrame';
import Table from '@components/table/table';
import TableController from '@components/table/tableController';
import TableNav from '@components/table/tableNav';
import { useState, useEffect } from 'react';
import { PointChangeInfoType } from '@interfaces/pointChangeInfo';
import useToken from '@lib/useToken';
import { createAdminPointChangeInfos } from '@lib/page/adminPointChangeInfo';

function getType(type : number) : string {
  switch (type) {
    case 0:
      return '충전';
    case 1:
      return '차감';
    case 2:
      return '수동 충전';
    case 3:
      return '수동 차감';
    default:
      return '알수없음';
  }
}

export default function Home() {
  const thead = ["index", "User", "Date", "Type", "Amount", "Detail"];
  const [tbody, setTbody] = useState<any[][]>([]);
  const [pointChangeInfos, setPointChangeInfos] = useState<PointChangeInfoType[]>([]);
  const {token} = useToken();
  useEffect(()=>{
    createAdminPointChangeInfos(token, setPointChangeInfos);
  }, []);
  useEffect(()=>{
    const new_pointChangeInfos : any[][] = [];
    if (pointChangeInfos.length === 0) return setTbody([]);
    pointChangeInfos.map((pointChangeInfo, index)=>{
      new_pointChangeInfos.push([
        (index+1).toString(),
        pointChangeInfo.user.nick_name,
        pointChangeInfo.create_date,
        getType(pointChangeInfo.type),
        pointChangeInfo.amount.toString(),
        pointChangeInfo.detail,
      ]);
    });
    setTbody(new_pointChangeInfos);
  }, [pointChangeInfos]);
  return (
    <AdminFrame currnetMenu='PointChangeInfo'>
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
