import Icon from "@components/basic/icon";
import Card from "@components/user/card";
import CoinTickerWS from "@interfaces/coinTickerWS";
import Image from "next/image";
import { useState, useEffect } from 'react';

type Props = {
	className?: string
	coin : CoinTickerWS | undefined
  code : string
}

export default function CoinCard({coin, code, className} : Props) {
  const [ticker, setTicker] = useState<CoinTickerWS>();
  const [animate, setAnimate] = useState("");
  
  useEffect(()=>{
    if (ticker != undefined && coin != undefined) {
      if (ticker.trade_price < coin.trade_price)
      {
        setAnimate("");
        setAnimate("plus");
      }
      else if (ticker.trade_price > coin.trade_price)
      {
        setAnimate("");
        setAnimate("minus");
      }
    }
    setTicker(coin);
  }, [coin]);
	return (
    <Card className={"h-full p-4 "+className}>
      <div className="flex justify-between mb-4">
        <div className="flex">
          <Icon src={"/coin/"+code.substr(4, 3).toLowerCase()+".png"} className="mr-2"/>
          <div className="font-semibold text-sm leading-[24px]">{code}</div>
        </div>
        {coin && coin.signed_change_rate >= 0 && <Icon src="/icon/up.svg" className="w-[8px]"/>}
        {coin && coin.signed_change_rate < 0 && <Icon src="/icon/down.svg" className="w-[8px]"/>}
      </div>
      <div className="flex justify-between">
        <div className="font-normal">
          <div className={"text-sm mb-1 highlight-text-"+animate}>{coin?.trade_price} KRW</div>
          <div className={"text-xs "+(coin && coin.signed_change_rate >= 0 ? "text-green" : "text-red")}>
            {coin && coin.signed_change_rate >= 0 && "+"}
            {coin && (coin.signed_change_rate*100).toFixed(2)}%
          </div>
        </div>
        <Image alt="graph" src="/icon/graph.svg" width={50} height={40}/>
      </div>
    </Card>
	);
}
  