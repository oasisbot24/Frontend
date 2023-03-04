import AdminFrame from '@components/admin/adminFrame';
import ControlPoint from '@components/admin/controlPoint';
import ControlUser from '@components/admin/controlUser';
import Table from '@components/table/table';

export default function Home() {
  const thead = ["index", "content"];
  const tbody = [["1", "hello"], ["2", "hi"], ["3", "world"]];
  return (
    <AdminFrame currnetMenu='User'>
      <div className='flex flex-col mt-8'>
        <div className='flex flex-col lg:flex-row w-full mb-8'>
          <div className='mr-0 lg:mr-4 mb-8 lg:mb-0 w-full'>
            <ControlUser />
            <ControlPoint />
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
