import Icon from "@components/basic/icon"

type Props = {
	className?: string
}

const ControlUser = ({className}:Props) => {
  return (
	  <div className={""+(className ?? '')}>
      <div className="bg-blue-200 flex justify-between text-white rounded-t px-4 py-2">
        <div >
          <div className="font-bold">회원정보</div>
          <div className="text-sm">Nickname</div>
        </div>
        <button className="btn btn-white px-8 rounded-full h-[35px] my-auto">
          <div className="flex">
            <Icon src="/icon/save.svg" className="w-[16px] mr-2 my-auto"/>
            <div className="my-auto">Save</div>
          </div>
        </button>
      </div>
      <div className="bg-gray-100 px-2 py-2 flex justify-between">
        <input placeholder="teamprivateclub@gmail.com" className="h-[30px]" disabled/>
        <input value="5%" className="h-[30px] w-1/4" />
        <input value="3 NFT" className="h-[30px] w-1/4" />
      </div>
	  </div>
  )
}

export default ControlUser
