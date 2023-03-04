import Title from '@components/user/title'
import Card from '@components/user/card'
import UserFrame from '@components/user/userFrame'
import TitleBorder from '@components/user/titleBorder'

export default function Home() {
  return (
      <UserFrame className="user-background-dark">
        <Card className='w-full max-w-[850px] m-auto p-4 h-full'>
          <Title className='mb-6'>Point shop</Title>
          <div className='mb-6'>
            <div className='text-sm font-bold mb-2'>Deposit address</div>
            <div className='text-xs mb-2'>기업은행 / 오아시스 주식회사 / 451-031087-01-0xx</div>
            <div className='text-xs text-red'>입금 후 제출 해주시기 바랍니다.</div>
          </div>
          <form className='mb-6' action="">
            <div className='mb-4'>
              <div className='text-sm font-bold mb-2'>Buy points</div>
              <input placeholder='Ex : 50,000 (* 10,000 Krw = 10,000 Point)' />
            </div>
            <div className='mb-4'>
              <div className='text-sm font-bold mb-2'>Deposit tag</div>
              <input className='mb-4' placeholder='Ex : 전화번호 8자리 + 가입 이름' />
            </div>
            <button className='btn btn-blue-300 rounded w-full sm:max-w-[300px] h-[40px]'>
              Submit
            </button>
          </form>
          <hr/>
          <TitleBorder>구매정보</TitleBorder>
          <div className='border p-4 text-xs'>
            <div className='mb-2'>▪ 입금 포인트 반영은 최대 10분정도 소요됩니다. 자동 반영되지 않을 경우 관리자에게 문의 하시기 바랍니다.</div>
            <div className='mb-2'>1. 입금시 지정된 태그값을 입력하셔야 하며, 입력하지 않거나  태그값을 오입력한 경우 관리자에게 문의 하시기 바랍니다.</div>
            <div className='mb-2'>2. 포인트 구매 후 환불을 진행하실 경우에는 10%의 수수료가 차감 된 뒤에 진행됩니다. 구매 및 이용에 참고 부탁 드리겠습니다.</div>
            <div>2-1. 보너스 포인트 (초기 제공 포인트, 충전 보너스 포인트 등)는 환불 대상이 아닙니다.</div>
          </div>
        </Card>
      </UserFrame>
  )
}
