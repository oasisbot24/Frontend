import Title from '@components/user/title'
import Card from '@components/user/card'
import UserFrame from '@components/user/userFrame'

export default function Home() {
  return (
      <UserFrame className="user-background-dark">
        <Card className='max-w-[400px] m-auto p-8 h-full'>
          <Title className='mb-6'>Create your account</Title>
          <form action="">
            <input className='mb-4' placeholder='Email' />
            <input className='mb-4' placeholder='Password' />
            <input className='mb-4' placeholder='Confirm Password' />
            <input className='mb-4' placeholder='Phone number' />
            <input className='mb-4' placeholder='Name' />
            <div className='flex justify-between text-xs mb-4'>
              <div className='text-gray-400'>이용약관에 동의합니다.</div>
              <div>이용약관 보기</div>
            </div>
            <button className='btn btn-pink rounded w-full h-[40px]'>
              Create
            </button>
          </form>
        </Card>
      </UserFrame>
  )
}
