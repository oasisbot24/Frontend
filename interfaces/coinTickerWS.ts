interface CoinTickerWS {
	code : string,  //	cd	마켓 코드 (ex. KRW-BTC)	String
	trade_price : number, //	종가(현재가)	Double	trade_timestamp : number, //	최근 거래 일시(UTC) 포맷: Unix Timestamp	Long
	change : string, //	EVEN : 보합 RISE : 상승 FALL : 하락	String
	signed_change_price : number, //	부호가 있는 변화액	Double
	signed_change_rate : number, //	부호가 있는 변화율	Double
	acc_trade_price : number, // 누적 거래대금(UTC 0시 기준)	Double
	acc_trade_price_24h : number, //24시간 누적 거래대금	Double
	acc_trade_volume : number, //	누적 거래량(UTC 0시 기준)	Double
	acc_trade_volume_24h : number, //	24시간 누적 거래량	Double
	trade_volume : number, //	가장 최근 거래량	Double
	trade_timestamp : number, //	최근 거래 일시(UTC) 포맷: Unix Timestamp	Long
	ask_bid : string, //	ab	매수/매도 구분	String	ASK : 매도 BID : 매수
	timestamp : number //	타임스탬프	Long
}

export default CoinTickerWS;
