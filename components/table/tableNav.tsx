type Props = {
	className?: string
}

const TableNav = ({className} : Props) => {
  return (
    <div className={"flex h-[30px] leading-[28px] "+(className ?? '')}>
      <div className="mr-8">All(100)</div>
      <input className="h-full w-full max-w-[400px] rounded-full border-none bg-gray-100 text-gray-500 text-sm" 
      placeholder="Search..." />
    </div>
  )
}

export default TableNav
