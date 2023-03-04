import NFTBenefit from "./NFTBenefit";
import NFTRoadmap from "./NFTRoadmap";
import NFTBuy from "./NFTBuy";
import NFTImage from "./NFTImage";

type Props = {
  data : {
    title : string
    content : string
  }[]
}

function NFT({data} : Props) {
	return (
        <div className="nft py-16">
          <div className="mb-4">
            <p className="title-1">OASIS BOT NFT</p>
          </div>
          <NFTBenefit />
          <NFTImage />
          <NFTRoadmap data={data} />
          <NFTBuy />
        </div>
	); 

}
export default NFT;