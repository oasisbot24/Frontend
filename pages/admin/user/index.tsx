import AdminFrame from "@components/admin/adminFrame";
import Table from "@components/table/table";
import TableController from "@components/table/tableController";
import TableNav from "@components/table/tableNav";
import { useState, useEffect } from "react";
import { UserType } from "@interfaces/user";
import Link from "next/link";
import Icon from "@components/basic/icon";
import { createAdminUsers } from "@lib/page/adminUser";

function EditUser({ userid }: { userid: number }) {
  return (
    <Link href={`/admin/user/${userid}`}>
      <Icon
        src="/static/icon/edit.svg"
        className="w-fit m-auto h-5 cursor-pointer"
      />
    </Link>
  );
}

export default function Home() {
  const thead = [
    "index",
    "Type",
    "Name",
    "Phone Number",
    "Point",
    "Commision Rate",
    "Hold NFT",
    "Control",
  ];
  const [tbody, setTbody] = useState<any[][]>([]);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    createAdminUsers(setUsers);
  }, []);
  useEffect(() => {
    const new_tbody: any[][] = [];
    if (users.length === 0) return setTbody([]);
    users.map((user, index) => {
      new_tbody.push([
        (index + 1).toString(),
        user.type == 0 ? "승인대기중" : user.type == 1 ? "관리자" : "유저",
        user.nick_name,
        user.phone,
        user.point.toString(),
        user.commission_rate.toString() + " %",
        user.nft.toString() + " NFT",
        <EditUser userid={user.id} key={index} />,
      ]);
    });
    setTbody(new_tbody);
  }, [users]);
  return (
    <AdminFrame currnetMenu="User">
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
