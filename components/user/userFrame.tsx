import Layout from "@components/basic/layout"
import Contact from "@components/user/Contact"
import UserNav from "@components/user/userNav"

type Props = {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

const UserFrame = ({ children, className, containerClassName }: Props) => {
  return (
    <Layout>
      <main className={"user h-screen "+(className ?? '')}>
        <UserNav />
        <Contact />
        <div className={"container mx-auto px-8 pb-8 grid "+(containerClassName ?? '')}>
          {children}
        </div>
      </main>
    </Layout>
  )
}

export default UserFrame
