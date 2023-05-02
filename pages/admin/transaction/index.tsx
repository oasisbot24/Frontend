import AdminFrame from "@components/admin/adminFrame";
import Table from "@components/table/table";
import TableController from "@components/table/tableController";
import TableNav from "@components/table/tableNav";
import { useState, useEffect } from "react";
import { TransactionType } from "@interfaces/transaction";
import { createAdminTransactions } from "@lib/page/adminTransaction";

export default function Home() {
  const thead = [
    "index",
    "User",
    "Date",
    "Type",
    "Position",
    "Total price",
    "PL",
    "PL Rate",
    "Point",
  ];
  const [tbody, setTbody] = useState<any[][]>([]);
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    createAdminTransactions(setTransactions);
  }, []);
  useEffect(() => {
    const new_transactions: any[][] = [];
    if (transactions.length === 0) return setTbody([]);
    transactions.map((transaction, index) => {
      new_transactions.push([
        (index + 1).toString(),
        transaction.user.nick_name,
        transaction.date,
        transaction.type,
        transaction.position,
        transaction.total_price.toFixed(0),
        transaction.profit_loss?.toFixed(0),
        ((transaction.profit_loss_rate ?? 0) * 100).toFixed(4) + " %",
        transaction.point,
      ]);
    });
    setTbody(new_transactions);
  }, [transactions]);
  return (
    <AdminFrame currnetMenu="Transaction">
      <div className="mt-8">
        <TableNav className="mb-8" />
        <div className="table_parent">
          <Table thead={thead} tbody={tbody} className="table_admin" />
        </div>
        <TableController />
      </div>
    </AdminFrame>
  );
}
