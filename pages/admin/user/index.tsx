import AdminFrame from '@components/admin/adminFrame';
import Table from '@components/table/table';
import TableController from '@components/table/tableController';
import TableNav from '@components/table/tableNav';

export default function Home() {
  const thead = ["index", "Name", "Phone Number", "Point", "Commision Rate", "Hold NFT"];
  const tbody = [["1", "오아시스", "010-4949-0297", "450 OASIS", "5%", "3 NFT"],
  ["2", "오아시스2", "010-1111-0297", "12000 OASIS", "10%", "0 NFT"],
  ["3", "오아시스3", "010-2222-0297", "990000 OASIS", "10%", "0 NFT"]];
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
