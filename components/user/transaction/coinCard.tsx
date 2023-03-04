import Icon from "@components/basic/icon";
import Card from "@components/user/card";
import Image from "next/image";

type Props = {
	className?: string
	coin : {}
}

export default function CoinCard({coin, className} : Props) {
	return (
    <Card className={"h-full p-4 "+className}>
      <div className="flex justify-between mb-4">
        <div className="flex">
          <Icon src="/coin/btc.png" className="mr-2"/>
          <div className="font-semibold text-sm leading-[24px]">Bitcoin</div>
        </div>
        <Icon src="/icon/up.svg" className="w-[8px]"/>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold">
          <div className="text-sm mb-1">20,231,002 KRW</div>
          <div className="text-xs text-green">+0.12%</div>
        </div>
        <Image alt="graph" src="/icon/graph.svg" width={50} height={40}/>
      </div>
    </Card>
	);
}
  