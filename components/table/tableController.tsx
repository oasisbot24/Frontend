type Props = {
	className?: string
}

const TableController = ({className} : Props) => {
  return (
    <div className="controller flex justify-between border-b-2 border-blue-200">
      <button className="btn btn-gray-border rounded-sm w-[100px] h-[40px] my-auto">previous</button>
      <div>page 1 of 10</div>
      <button className="btn btn-gray-border rounded-sm w-[100px] h-[40px] my-auto">next</button>
    </div>
  )
}

export default TableController
