import AdminFrame from '@components/admin/adminFrame';
import Table from '@components/table/table';
import TableController from '@components/table/tableController';
import TableNav from '@components/table/tableNav';
import { createAdminUserIndex } from '@lib/page/adminuser';
import { useState, useEffect } from 'react';
import useToken from '@lib/useToken';
import { UserType } from '@interfaces/user';
import Link from 'next/link';
import Icon from '@components/basic/icon';

function EditUser({userid} : {userid : number}) {
  return (
      <Link href={`/admin/user/${userid}`}>
        <Icon src='/icon/edit.svg' className='w-fit m-auto h-5 cursor-pointer' />
      </Link>
  );
}

export default function Home() {
  const thead = ["index", "Name", "Phone Number", "Point", "Commision Rate", "Hold NFT", "Control"];
  const [tbody, setTbody] = useState<any[][]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const {token} = useToken();
  useEffect(()=>{
    createAdminUserIndex(token, setUsers);
  }, []);
  useEffect(()=>{
    const new_tbody : any[][] = [];
    users.map((user, index)=>{
      new_tbody.push([
        (index+1).toString(), 
        user.nick_name, 
        user.phone, 
        user.point.toString(),
        user.commission_rate.toString()+" %", 
        user.nft.toString()+" NFT",
        <EditUser userid={user.id} key={index}/>
      ]);
    });
    setTbody(new_tbody);
  }, [users]);
  return (
    <AdminFrame currnetMenu='User'>
      <div className='mt-8'>
        <TableNav className="mb-8" />
        <Table thead={thead} tbody={tbody} className='table_admin'/>
        <TableController />
      </div>
    </AdminFrame>
  )
}
