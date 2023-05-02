import Card from "@components/user/card";
import Title from "@components/user/title";
import Image from "next/image";
import Link from "next/link";

export default function NftCard() {
  return (
    <Card className="w-full h-full sm:mr-2 p-4 mb-4 sm:mb-0">
      <Image
        alt="nft-image"
        src="/images/nft.png"
        className="w-full max-w-[200px] rounded-lg mx-auto mb-4"
        width={100}
        height={100}
      />
      <Title className="mb-4">OASIS BOT NFT</Title>
      <div className="flex justify-between mb-4">
        <div>
          <div className="text-xs text-gray-400">Creator</div>
          <div className="font-bold">OASIS_BOT</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Current Bid</div>
          <div className="font-bold">1,000 KLAY</div>
        </div>
      </div>
      <Link
        href="https://opensea.io/collection/oasis-bot"
        target="_blank"
        className="w-full"
      >
        <button className="btn btn-blue-300 rounded w-full h-[25px]">
          NFT 구매
        </button>
      </Link>
    </Card>
  );
}
