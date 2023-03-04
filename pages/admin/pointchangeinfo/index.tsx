import AdminFrame from '@components/admin/adminFrame';
import Table from '@components/table/table';
import TableController from '@components/table/tableController';
import TableNav from '@components/table/tableNav';

export default function Home() {
  const thead = ["index", "content"];
  const tbody = [["1", "hello"], ["2", "hi"], ["3", "world"]];
  return (
    <AdminFrame currnetMenu='PointChangeInfo'>
      <div className='mt-8'>
        <TableNav className="mb-8" />
        <Table thead={thead} tbody={tbody} className='table_admin'/>
        <TableController />
      </div>
    </AdminFrame>
  )
}
