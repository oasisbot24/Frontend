interface UpbitCoinTickerWS {
	type : string, //	ty	타입	String	ticker : 현재가
	code : string,  //	cd	마켓 코드 (ex. KRW-BTC)	String
	opening_price : number, //	시가	Double
	high_price : number, //	고가	Double
	low_price : number, //	저가	Double
	trade_price : number, //	종가(현재가)	Double
	prev_closing_price : number, //	전일 종가(UTC 0시 기준)	Double
	change : string, //	EVEN : 보합 RISE : 상승 FALL : 하락	String
	change_price : number, //	변화액의 절대값	Double
	change_rate : number, //	변화율의 절대값	Double
	signed_change_price : number, //	부호가 있는 변화액	Double
	signed_change_rate : number, //	부호가 있는 변화율	Double
	trade_volume : number, //	가장 최근 거래량	Double
	acc_trade_price : number, // 누적 거래대금(UTC 0시 기준)	Double
	acc_trade_price_24h : number, //24시간 누적 거래대금	Double
	acc_trade_volume : number, //	누적 거래량(UTC 0시 기준)	Double
	acc_trade_volume_24h : number, //	24시간 누적 거래량	Double
	trade_date : string, //	최근 거래 일자(UTC) 포맷: yyyyMMdd	String
	trade_time : string, //	최근 거래 시각(UTC) 포맷: HHmmss	String
	trade_timestamp : number, //	최근 거래 일시(UTC) 포맷: Unix Timestamp	Long
	ask_bid : string, //	ab	매수/매도 구분	String	ASK : 매도 BID : 매수
	acc_ask_volume : string, //	aav	누적 매도량	Double	
	acc_bid_volume : string, //	abv	누적 매수량	Double	
	highest_52_week_price : number, //	52주 신고가	Double
	highest_52_week_date : string, //	52주 신고가 달성일 포맷: yyyy-MM-dd	String
	lowest_52_week_price : number, //	52주 신저가	Double
	lowest_52_week_date : string, //	52주 신저가 달성일 포맷: yyyy-MM-dd	String
	market_state : string, //	ms	거래상태	String	PREVIEW : 입금지원 ACTIVE : 거래지원가능 DELISTED : 거래지원종료
	is_trading_suspended : boolean, //	its	거래 정지 여부	Boolean	
	delisting_date : string, //	dd	상장폐지일	Date	
	market_warning : string, //	mw	유의 종목 여부	String	NONE : 해당없음 CAUTION : 투자유의
	timestamp : number //	타임스탬프	Long
	stream_type : string, //	st	스트림 타입	String	SNAPSHOT : 스냅샷 REALTIME : 실시간
}

export type {
	UpbitCoinTickerWS
};
