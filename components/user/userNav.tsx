import useToken from '@lib/useToken';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Menu = (menuOpen : boolean, token : string) => {
  if (token !== "") {
    return (
      <div className={'menubox '+(menuOpen ? "h-[130px] md:h-fit" : "h-0 md:h-fit")}>
        <div className='flex justify-end mt-4 md:mt-0 md:ml-6 hover:text-gray-300'>
          <Link href="/pointshop" className='my-auto'>포인트 구매</Link>
        </div>
        <div className='flex justify-end mt-4 md:mt-0 md:ml-6  hover:text-gray-300'>
          <Link href="/transaction" className='my-auto'>거래내역</Link>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className={'menubox '+(menuOpen ? "h-[130px] md:h-fit" : "h-0 md:h-fit")}>
        <div className='flex justify-end mt-4 md:mt-0 md:ml-6 hover:text-gray-300'>
          <Link href="/signin" className='my-auto'>Sign in</Link>
        </div>
        <div className='flex justify-end mt-4 md:mt-0 md:ml-6 hover:text-gray-300'>
          <div className='rounded border hover:border-gray-300 py-1 px-2 '>
            <Link href="/signup" className='my-auto'>Sign up</Link>
          </div>
        </div>
      </div>
    )
  }
}

const UserNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { token } = useToken();
  const [menu, setMenu] = useState(Menu(menuOpen, token));

  useEffect(() => {
    setMenu(Menu(menuOpen, token));
  }, [token, menuOpen])
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
        {menu}
      </div>
    </nav>
  )
}

export default UserNav
