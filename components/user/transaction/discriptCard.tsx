import Card from "@components/user/card";

export default function DiscriptCard() {
	return (
        <Card className='h-full p-4'>
          <div className="w-fit pr-4 text-md sm:text-lg border-b border-white font-semibold mb-4">
            OASIS BOT NFT
          </div>
          <div className="text-xs">
            <div className="mb-4">
              <span className="font-semibold">OASIS BOT NFT</span>를 영입하고 스쿼드를 꾸려 혜택을 받아보실 수 있습니다.
            </div>
            <div className="mb-4">
              1. <span className="font-semibold">OASIS BOT NFT</span> 스쿼드가 수수료를 절감시켜줍니다.
            </div>
            <div className="mb-4">
              <p className="mb-1">
                2. <span className="font-semibold">OASIS BOT NFT</span> 
                <span className="text-blue-300">&nbsp;4인 스쿼드 효과</span>
              </p>
              <p className="">기본 수수료 10%에서 할인된 7.5%의 수수료가 적용됩니다.</p>
            </div>
            <div>
              <p className="mb-1">
                3. <span className="font-semibold">OASIS BOT NFT</span> 
                <span className="text-red">&nbsp;10인 스쿼드 효과</span>
              </p>
              <p className="">기본 수수료 10%에서 할인된 5%의 수수료가 적용됩니다.</p>
            </div>
          </div>
        </Card>
	);
}
  