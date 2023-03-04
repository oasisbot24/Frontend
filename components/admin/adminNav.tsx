import AdminNavMenu from "@components/admin/adminNavMenu"
import { useState } from 'react';

type Props = {
  currentMenu : string
}

const AdminNav = ({currentMenu} : Props) => {
  const menuList = ["User", "Transaction", "PointTopup", "PointChangeInfo"];
  const [adminOpen, setAdminOpen] = useState(true);
  return (
    <nav className='flex' aria-expanded={adminOpen}>
      <button className="menubutton"
      onClick={() => {setAdminOpen(!adminOpen)}}
      aria-expanded={adminOpen}>
      </button>
      <div className="flex flex-col w-full p-4">
        <div className="text-xl mb-12 p-4 flex">
          <div className="h-fit m-auto">Admin</div>
        </div>
        {menuList.map((menu, index) => {
          return (
            <AdminNavMenu key={index} menu={menu} src={"/icon/"+menu+".svg"} 
            className={index != menuList.length - 1 ? "mb-4": ""}
            selected={menu == currentMenu}/>
          )
        })}
      </div>
    </nav>
  )
}

export default AdminNav
