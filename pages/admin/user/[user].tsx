import AdminFrame from "@components/admin/adminFrame";
import ControlPoint from "@components/admin/controlPoint";
import ControlUser from "@components/admin/controlUser";
import Table from "@components/table/table";
import { InitUserType } from "@init/user";
import { UserType } from "@interfaces/user";
import { createAdminUser } from "@lib/page/adminUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TransactionType } from "@interfaces/transaction";
import { PointTopupType } from "@interfaces/pointTopup";
import { PointChangeInfoType } from "@interfaces/pointChangeInfo";

function getType(type: number): string {
  switch (type) {
    case 0:
      return "충전";
    case 1:
      return "차감";
    case 2:
      return "수동 충전";
    case 3:
      return "수동 차감";
    default:
      return "알수없음";
  }
}

export default function Home() {
  const router = useRouter();

  const [user, setUser] = useState<UserType>(InitUserType);

  const [transaction, setTransaction] = useState<TransactionType[]>([]);
  const [pointTopup, setPointTopup] = useState<PointTopupType[]>([]);
  const [pointChangeInfo, setPointChangeInfo] = useState<PointChangeInfoType[]>(
    []
  );

  const [transactionTbody, setTransactionTbody] = useState<any[][]>([]);
  const [pointTopupTbody, setPointTopupTbody] = useState<any[][]>([]);
  const [pointChangeInfoTbody, setPointChangeInfoTbody] = useState<any[][]>([]);

  useEffect(() => {
    if (typeof router.query.user === "string")
      createAdminUser(
        parseInt(router.query.user),
        setUser,
        setTransaction,
        setPointTopup,
        setPointChangeInfo
      );
  }, [router.query.user]);

  const transactionThead = [
    "Date",
    "Type",
    "Position",
    "Total Price",
    "PL rate",
    "Point",
  ];
  const pointTopupThead = ["Date", "Amount", "Tag", "State"];
  const pointChangeInfoThead = ["Date", "Type", "Amount", "Detail"];

  useEffect(() => {
    const new_transaction: any[][] = [];
    if (transaction.length === 0) return setTransactionTbody([]);
    transaction.map((row, index) => {
      new_transaction.push([
        row.date,
        row.type,
        row.position,
        row.total_price.toFixed(0),
        ((row.profit_loss_rate ?? 0) * 100).toFixed(4) + " %",
        row.point,
      ]);
    });
    setTransactionTbody(new_transaction);
  }, [transaction]);

  useEffect(() => {
    const new_pointTopup: any[][] = [];
    if (pointTopup.length === 0) return setPointTopupTbody([]);
    pointTopup.map((row, index) => {
      new_pointTopup.push([
        row.create_date,
        row.amount,
        row.tag,
        row.condition == 0 ? (
          <div className="text-center font-bold text-blue-200">승인대기중</div>
        ) : row.condition == 1 ? (
          <div className="text-center font-bold text-black">충전됨</div>
        ) : (
          <div className="text-center font-bold text-red">거부됨</div>
        ),
      ]);
    });
    setPointTopupTbody(new_pointTopup);
  }, [pointTopup]);

  useEffect(() => {
    const new_pointChangeInfo: any[][] = [];
    if (pointChangeInfo.length === 0) return setPointChangeInfoTbody([]);
    pointChangeInfo.map((row, index) => {
      new_pointChangeInfo.push([
        row.create_date,
        getType(row.type),
        row.amount,
        row.detail,
      ]);
    });
    setPointChangeInfoTbody(new_pointChangeInfo);
  }, [pointChangeInfo]);

  return (
    <AdminFrame currnetMenu="User">
      <div className="flex flex-col mt-8">
        <div className="flex flex-col lg:flex-row w-full mb-8">
          <div className="mr-0 lg:mr-4 mb-8 lg:mb-0 w-full">
            <ControlUser user={user} />
            <ControlPoint user={user} />
          </div>
          <div className="mr-0 lg:ml-4 w-full">
            <div className="text-sm font-bold mb-2">Transaction</div>
            <div className="table_parent">
              <Table
                thead={transactionThead}
                tbody={transactionTbody}
                className="table_small w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="mr-0 lg:mr-4 mb-8 lg:mb-0 w-full">
            <div className="text-sm font-bold mb-2">Point Topup</div>
            <div className="table_parent">
              <Table
                thead={pointTopupThead}
                tbody={pointTopupTbody}
                className="table_small w-full"
              />
            </div>
          </div>
          <div className="mr-0 lg:ml-4 w-full">
            <div className="text-sm font-bold mb-2">Point Change Info</div>
            <div className="table_parent">
              <Table
                thead={pointChangeInfoThead}
                tbody={pointChangeInfoTbody}
                className="table_small w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </AdminFrame>
  );
}
