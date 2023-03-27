import Title from '@components/user/title'
import Card from '@components/user/card'
import UserFrame from '@components/user/userFrame'
import Link from 'next/link';

export default function Home() {
  return (
      <UserFrame className="user-background-dark">
        <Card className='w-full max-w-[400px] m-auto p-8 h-full'>
          <Title className='mb-6'>Create your account</Title>
          <div className='text-sm m-auto text-center'>
            <div className='mb-2'>
              회원가입에 성공했습니다. 
            </div>
            <div className='mb-4'>
              Email 인증을 진행해주세요.
            </div>
          </div>
          <Link href="/signin" className='w-full'>
            <button className='btn btn-pink mb-4 rounded w-full h-[38px]'>
            Sign in
            </button>
          </Link>
        </Card>
      </UserFrame>
  )
}
