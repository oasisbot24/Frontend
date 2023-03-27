import UserFrame from '@components/user/userFrame'
import NftCard from '@components/user/transaction/nftCard'
import CoinGroup from '@components/user/transaction/coinGroup'
import TransactionCard from '@components/user/transaction/transactionCard'
import UserInformationCard from '@components/user/transaction/userInformationCard'
import DiscriptCard from '@components/user/transaction/discriptCard'
import { useEffect, useState } from 'react';
import useToken from '@lib/useToken'
import { createTransaction } from '@lib/page/transaction'
import { UserType } from '@interfaces/user';
import { InitUserType } from '@init/user'
import { TransactionType } from '@interfaces/transaction'

export default function Home() {
  const {token} = useToken();
  const [user, setUser] = useState<UserType>(InitUserType);
  const [transaction, setTransaction] = useState<TransactionType[]>([]);

  useEffect(()=>{
    createTransaction(token, setUser, setTransaction);
  }, [])
  return (
      <UserFrame className="user-background-dark" containerClassName='lg:grid-flow-col'>
        <div className='flex flex-col lg:mr-4 mb-4 lg:mb-0 order-2 lg:order-1'>
          <div className='flex flex-col w-50 sm:flex-row mb-4'>
            <NftCard />
            <CoinGroup/>
          </div>
          <DiscriptCard />
        </div>
        <div className='flex flex-col w-50 lg:ml-4 mb-4 lg:mb-0 order-1 lg:order-2'>
          <UserInformationCard user={user} />
          <TransactionCard transaction={transaction}/>
        </div>
      </UserFrame>
  )
}
