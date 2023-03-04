import CoinCard from "@components/user/transaction/coinCard";

type Props = {
  coins : any[]
}

export default function CoinGroup({coins} : Props) {
  return (
    <div className='w-full h-full flex flex-col sm:ml-2'>
      {coins.map((coin, index) => {
        return (<CoinCard key={index} coin={coin} 
          className={index != coins.length - 1 ? "mb-4" : ""}/>);
      })}
    </div>
  );
}
