import CoinTickerWS from '@interfaces/coinTickerWS';
import { UpbitCoinTickerWS } from '@interfaces/upbitCoinTickerWS';
//import WebSocket from 'ws';

/**
 * @description 업비트 웹소켓 코인 가격 정보 조회
 * @param coinlist 코인 목록
 * @param callback 콜백 함수
 * @returns 웹소켓
*/
function getTickerWS(coinlist : string[], callback : (json : CoinTickerWS) => void){
  const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
  const data = [{"ticket":"getTickerWS"},{"type":"ticker","codes":coinlist}];
  ws.onmessage = (event) => {
    var reader = new FileReader();
    reader.onload = function() {
      const json : UpbitCoinTickerWS = JSON.parse(String(reader.result));
      callback(json);
    }
    reader.readAsText(event.data);
  };
  ws.onopen = (event) => {
    ws.send(JSON.stringify(data));
  };
  ws.onerror = (event) => {
    console.log('WebSocket error: ', event);
  };
  return ws;
}

export default getTickerWS;
