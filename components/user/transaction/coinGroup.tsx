import CoinCard from "@components/user/transaction/coinCard";
import CoinTickerWS from "@interfaces/coinTickerWS";
import { createCoinGroup, destroyCoinGroup } from "@lib/page/transaction";
import { useState, useEffect } from 'react';

export default function CoinGroup(){
  const coinList = ["KRW-BTC", "KRW-ETH", "KRW-XRP"];
  const [coins, setCoins] = useState<{[key : string] : CoinTickerWS | undefined}>({});

  useEffect(()=>{
    setCoins({
      "KRW-BTC": undefined,
      "KRW-ETH": undefined,
      "KRW-XRP": undefined,
    });
    const ws = createCoinGroup(coinList, setCoins);
    return () => {
      destroyCoinGroup(ws);
    }
  }, []);

  return (
    <div className='w-full h-full flex flex-col sm:ml-2'>
      {Object.keys(coins).map((coin, index) => {
        return (<CoinCard key={index} coin={coins[coin]} code={coin}
          className={index != Object.keys(coins).length - 1 ? "mb-4" : ""}/>);
      })}
    </div>
  );
}
