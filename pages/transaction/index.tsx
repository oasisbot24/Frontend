import UserFrame from '@components/user/userFrame'
import NftCard from '@components/user/transaction/nftCard'
import CoinGroup from '@components/user/transaction/coinGroup'
import TransactionCard from '@components/user/transaction/transactionCard'
import UserInformationCard from '@components/user/transaction/userInformationCard'
import DiscriptCard from '@components/user/transaction/discriptCard'

export default function Home() {
  const coinDataList = [1,2,3];
  return (
      <UserFrame className="user-background-dark" containerClassName='lg:grid-flow-col'>
        <div className='flex flex-col lg:mr-4 mb-4 lg:mb-0 order-2 lg:order-1'>
          <div className='flex flex-col sm:flex-row mb-4'>
            <NftCard />
            <CoinGroup coins={coinDataList}/>
          </div>
          <DiscriptCard />
        </div>
        <div className='flex flex-col lg:ml-4 mb-4 lg:mb-0 order-1 lg:order-2'>
          <UserInformationCard />
          <TransactionCard />
        </div>
      </UserFrame>
  )
}
