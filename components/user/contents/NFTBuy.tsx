function NFTBuy() {
  return (
    <div className="buy flex flex-col lg:flex-row bg-blue-200 mb-16 p-4" >
      <div className="text-center mt-2 mb-4 lg:m-auto w-full lg:w-1/4">
        <h3 className="text-2xl font-viga">BUY AN OASIS</h3>
      </div>
      <div className="mb-6 lg:m-auto text-center w-full lg:w-1/4">
        <p className="text-black mb-lg-0">
          OpenSea에서 당신의 <br/> <span className='text-black font-bold'>OASIS BOT NFT</span>를 영입하세요!
        </p>
      </div>
      <div className="m-auto text-center w-full lg:w-1/4">
        <a href="https://opensea.io/collection/oasis-bot" target='_blank' rel="noopener noreferrer">
          <button className="buy-btn" type="button">BUY AN OASIS NFT <br/> ON OPENSEA</button>
        </a>
      </div>
    </div>
  );
}

export default NFTBuy;
