import Icon from "@components/basic/icon"
import Link from "next/link"

type Props = {
  menu : string
  src : string
  selected? : boolean
	className?: string
}

const AdminNavMenu = ({menu, src, selected, className}:Props) => {
  return (
    <Link href={"/admin/"+menu.toLowerCase()}>
      <div className={(selected ? 'bg-admin-nav-selected':'hover:bg-admin-nav-hover')+
      " menu "+(className ?? '')}>
        <Icon src={src} className="mr-3 w-[18px]"/>
        
        <div className="text-sm">{menu}</div>
      </div>
    </Link>
  )
}

export default AdminNavMenu
