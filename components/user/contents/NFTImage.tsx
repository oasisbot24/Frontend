import Image from "next/image";

function NFTImage() {
  const nft1 = '/images/nft1.png';
  const nft2 = '/images/nft2.png';
  const nft3 = '/images/nft3.png';
  const nft4 = '/images/nft4.png';
  return (
    <div className='flex flex-col md:flex-row mb-12'>
      <div className="flex mb-6 md:mb-0">
        <div className="flex justify-center pl-0 pr-3">
          <Image src={nft1} alt="nft1" className="rounded-lg" width={1000} height={1000}/>
        </div>
        <div className="flex justify-center pl-3 pr-0 md:pr-3">
          <Image src={nft2} alt="nft2" className="rounded-lg" width={1000} height={1000}/>
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-center pl-0 md:pl-3 pr-3">
          <Image src={nft3} alt="nft3" className="rounded-lg" width={1000} height={1000}/>
        </div>
        <div className="flex justify-center pl-3 pr-0">
          <Image src={nft4} alt="nft4" className="rounded-lg" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
}

export default NFTImage;
