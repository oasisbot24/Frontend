import { postTransaction } from "@api/user/transaction";
import Table from "@components/table/table";
import Card from "@components/user/card";
import { InitTransactionType } from "@init/transaction";
import { TransactionType } from "@interfaces/transaction";
import { useState, useEffect } from "react";

type Props = {
  transaction: TransactionType[];
};

export default function TransactionCard({ transaction }: Props) {
  const thead = ["주문시간", "종목", "포지션", "체결금액", "손익율", "포인트"];
  const [tbody, setTbody] = useState<any[][]>([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < transaction.length && i < 15; i++) {
      let point = "";
      if (transaction[i].point == null || transaction[i].point == 0) {
        point = "-";
      } else {
        point = transaction[i].point?.toString() as string;
      }
      temp.push([
        transaction[i].date,
        transaction[i].type,
        transaction[i].position,
        transaction[i].total_price.toFixed(0),
        ((transaction[i].profit_loss_rate ?? 0) * 100).toFixed(4) + " %",
        point,
      ]);
    }
    setTbody(temp);
  }, [transaction]);

  return (
    <Card className="h-full p-4 table_parent">
      <div className="flex justify-between mb-4">
        <div className="text-md sm:text-lg font-semibold">Transaction</div>
        <div>
          {/*<div className="text-xs text-gray-400">1월 손익</div>
              <div className="text-sm font-semibold">+3,524 KRW</div>
              <button onClick={onClickPost}> post test </button>*/}
        </div>
      </div>
      <Table thead={thead} tbody={tbody} className="table_small" />
    </Card>
  );
}
