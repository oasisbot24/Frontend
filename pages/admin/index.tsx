import AdminFrame from '@components/admin/adminFrame';
import Icon from '@components/basic/icon';
import Layout from '@components/basic/layout'

export default function Home() {
  return (
    <AdminFrame currnetMenu='Login' className='login'>
      <div className='flex flex-col w-full max-w-[400px] h-[580px] rounded-xl bg-white shadow m-auto p-12'>
        <div className='w-full h-[100px] mb-12'>
          <Icon src='/icon/favicon.svg' className='w-full' />
        </div>
        <div className='font-viga text-center text-xl mb-8'>Administrator</div>
        <div className='pr-8 h-[30px] border-gray-border border-b w-fit text-sm mb-4'>Login</div>
        <form>
          <input className='w-full h-[40px] mb-4' placeholder='Email'/>
          <input className='w-full h-[40px] mb-4' placeholder='Password'/>
          <button className='btn btn-blue-200 rounded w-full h-[40px]'>Login</button>
        </form>
      </div>
    </AdminFrame>
  )
}
