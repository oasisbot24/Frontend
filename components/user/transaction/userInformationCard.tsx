import Card from "@components/user/card";
import { UserType } from "@interfaces/user";
import Link from "next/link";

type Props = {
  user: UserType;
}

export default function UserInformationCard({user} : Props) {
	return (
    <Card className='p-4 mb-4 h-fit'>
      <div className='flex justify-between mb-4'>
        <div className="text-md sm:text-lg font-semibold">User Information</div>
        <div className="flex">
          <Link href="signup/edit">
            <div className="text-xs text-gray-400 h-fit my-auto py-1 px-2 rounded-full border border-gray-400">유저정보 수정</div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between text-xs text-center px-2">
        <div>
          <div className="text-gray-400 mb-1">유저</div>
          <div>{user.nick_name}</div>
        </div>
        <div>
          <div className="text-gray-400 mb-1">현재 포인트</div>
          <div className="text-blue-300">{user.point}</div>
        </div>
        <div>
          <div className="text-gray-400 mb-1">수수료율</div>
          <div>{user.commission_rate}%</div>
        </div>
        <div>
          <div className="text-gray-400 mb-1">NFT 보유량</div>
          <div>{user.nft}개</div>
        </div>
      </div>
    </Card>
	);
}
  