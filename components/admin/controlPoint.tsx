import Icon from "@components/basic/icon"
import { UserType } from '@interfaces/user';

type Props = {
  user: UserType
	className?: string
}

const ControlPoint = ({user, className}:Props) => {
  return (
	  <div className={""+(className ?? '')}>
      <div className="bg-white flex justify-between text-blue-200 rounded-t px-4 py-2">
        <div className="my-auto">
          <div className="font-bold">Point</div>
        </div>
        <button className="btn btn-blue-200 px-8 rounded-full h-[35px] my-auto">
          <div className="flex">
            <Icon src="/icon/point.svg" className="w-[16px] mr-2 my-auto"/>
            <div className="my-auto">Transfer</div>
          </div>
        </button>
      </div>
      <div className="bg-gray-100 px-2 py-2 flex justify-between">
        <input className="h-[30px] w-1/2" placeholder="+10000"/>
        <div className="text-xs font-bold my-auto">
          분배후 포인트 : {user.point}
        </div>
      </div>
	  </div>
  )
}

export default ControlPoint
