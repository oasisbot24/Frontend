import Card from "@components/user/card";

export default function UserInformationCard() {
	return (
        <Card className='p-4 mb-4 h-fit'>
          <div className='flex justify-between mb-4'>
            <div className="text-md sm:text-lg font-semibold">User Information</div>
            <div className="flex">
              <div className="text-xs text-gray-400">유저정보 수정</div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-center px-2">
            <div>
              <div className="text-gray-400 mb-1">유저</div>
              <div>OASIS</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1">현재 포인트</div>
              <div className="text-blue-300">300,000</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1">수수료율</div>
              <div>10%</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1">NFT 보유량</div>
              <div>3개</div>
            </div>
          </div>
        </Card>
	);
}
  