import AdminFrame from '@components/admin/adminFrame';
import ControlPoint from '@components/admin/controlPoint';
import ControlUser from '@components/admin/controlUser';
import Table from '@components/table/table';
import { InitUserType } from '@init/user';
import { UserType } from '@interfaces/user';
import { createAdminUser } from '@lib/page/adminuser';
import { useEffect, useState } from 'react';
import useToken from '@lib/useToken';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const {token} = useToken();
  const [user, setUser] = useState<UserType>(InitUserType);
  useEffect(()=>{
    if (typeof(router.query.user) === "string")
      createAdminUser(token, parseInt(router.query.user), setUser);
  }, [router.query.user]);

  const thead = ['Date', 'Type', 'Point', 'NFT', 'Memo'];
  const tbody = [
    ['2021-10-10', 'Topup', '100', '1', ''],
    ['2021-10-10', 'Topup', '100', '1', ''],
    ['2021-10-10', 'Topup', '100', '1', ''],
  ];
  
  return (
    <AdminFrame currnetMenu='User'>
      <div className='flex flex-col mt-8'>
        <div className='flex flex-col lg:flex-row w-full mb-8'>
          <div className='mr-0 lg:mr-4 mb-8 lg:mb-0 w-full'>
            <ControlUser user={user}/>
            <ControlPoint user={user}/>
          </div>
          <div className='mr-0 lg:ml-4 w-full'>
            <div className='text-sm font-bold mb-2'>Transaction</div>
            <Table thead={thead} tbody={tbody} className='table_small w-full'/>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row w-full'>
          <div className='mr-0 lg:mr-4 mb-8 lg:mb-0 w-full'>
            <div className='text-sm font-bold mb-2'>Point Topup</div>
            <Table thead={thead} tbody={tbody} className='table_small w-full'/>
          </div>
          <div className='mr-0 lg:ml-4 w-full'>
            <div className='text-sm font-bold mb-2'>Point Change Info</div>
            <Table thead={thead} tbody={tbody} className='table_small w-full'/>
          </div>
        </div>
      </div>
    </AdminFrame>
  )
}
