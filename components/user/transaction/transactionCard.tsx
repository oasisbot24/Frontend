import Table from "@components/table/table";
import Card from "@components/user/card";

export default function TransactionCard() {
  const thead = ["주문시간", "종목", "포지션", "체결금액", "포인트"];
  const tbody = [["01.16.22:56", "BTC-KRW", "sell", "32,258,840 KRW", "-30 OASIS"],
  ["01.16.22:56", "BTC", "buy", "258,000 KRW", "-"],]
	return (
        <Card className='h-full p-4'>
          <div className='flex justify-between mb-4'>
            <div className="text-md sm:text-lg font-semibold">Transaction</div>
            <div>
              <div className="text-xs text-gray-400">1월 손익</div>
              <div className="text-sm font-semibold">+3,524 KRW</div>
            </div>
          </div>
          <Table thead={thead} tbody={tbody} className="table_small"/>
        </Card>
	);
}
  