import { getTransaction } from '@api/user/transaction';
import { getUser } from '@api/user/user';
import CoinTickerWS from '@interfaces/coinTickerWS';
import getTickerWS from '@lib/getTickerWS';
import { getToken } from '@lib/token';
import router from 'next/router';

async function createTransaction(setUser : Function, setTransaction : Function) {
	try {
		const token = getToken()
		if (token.token === "") throw new Error("token is null");
		const user = await getUser();
		setUser(user);
		const transaction = await getTransaction();
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