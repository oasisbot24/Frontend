import AdminNav from "@components/admin/adminNav"
import Layout from "@components/basic/layout"

type Props = {
  children: React.ReactNode
  currnetMenu: string
  className?: string
  containerClassName?: string
}

const AdminFrame = ({ children, currnetMenu, className, containerClassName }: Props) => {
  return (
    <Layout>
      <main className="admin">
        <AdminNav currentMenu={currnetMenu} />
        <div className={"content "+(className ?? '')}>
          <div className="head">OASIS BOT</div>
          <div className={"container mx-auto px-8 grid "+(containerClassName ?? '')}>
            {children}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AdminFrame
