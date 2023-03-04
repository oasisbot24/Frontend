import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const UserNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='flex'>
      <div className="flex flex-wrap items-center justify-between align-middle w-full px-8 mt-6 mb-6">
        <Link href="/">
          <Image alt='oasis' src="/logo.png" width={170} height={50}/>
        </Link>

        <button data-collapse-toggle="navbar-default" type="button" 
        className="menubutton"
        onClick={() => {setMenuOpen(!menuOpen)}}
        aria-expanded={menuOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>

        <div className={'menubox '+(menuOpen ? "h-[130px] md:h-fit" : "h-0 md:h-fit")}>
          <div className='flex justify-end mt-4 md:mt-0'>
            <Link href="pointshop" className='md:mr-6 my-auto'>포인트 구매</Link>
          </div>
          <div className='flex justify-end mt-4 md:mt-0'>
            <Link href="transaction" className='md:mx-6 my-auto'>거래내역</Link>
          </div>
          <div className='flex justify-end mt-4 md:mt-0'>
            <Link href="signup" className='md:ml-6 my-auto'>Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default UserNav
