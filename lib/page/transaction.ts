import { getTransaction } from '@api/user/transaction';
import { getUser } from '@api/user/user';
import CoinTickerWS from '@interfaces/coinTickerWS';
import getTickerWS from '@lib/getTickerWS';
import router from 'next/router';

async function createTransaction(token : string, setUser : Function, setTransaction : Function) {
	try {
		if (token === "") throw new Error("token is null");
		const user = await getUser(token);
		setUser(user);
		const transaction = await getTransaction(token);
		setTransaction(transaction);
	} catch (error) {
		router.push("/signin");
	}
}

function createCoinGroup(coinList : string[], setCoins : Function) {
	const ws = getTickerWS(coinList, (json) => {
		setCoins((prev : {[key : string] : CoinTickerWS}) => {
			let current = {...prev};
			current[json.code] = json;
			return current;
		});
	});
	return ws;
}

function destroyCoinGroup(ws : WebSocket) {
	ws.close();
}

export {
	createTransaction,
	createCoinGroup,
	destroyCoinGroup
}