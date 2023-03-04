import Title from '@components/user/title'
import Card from '@components/user/card'
import UserFrame from '@components/user/userFrame'
import Link from 'next/link'

export default function Home() {
  return (
      <UserFrame className="user-background-dark">
        <Card className='max-w-[400px] m-auto p-8 h-full'>
          <Title className='mb-6'>Sign In</Title>
          <form action="" className='mb-6'>
            <input className='mb-4' placeholder='Email' />
            <input className='mb-4' placeholder='Password' />
            <button className='btn btn-pink rounded w-full h-[40px]'>
              Sign In
            </button>
          </form>
          <div className='flex justify-between font-viga text-sm'>
            <div className='text-gray-400'>New to OASIS?</div>
            <Link href="signup">
              <div>Sign Up Now</div>
            </Link>
          </div> 
        </Card>
      </UserFrame>
  )
}
