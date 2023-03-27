import { TransactionType, PostTransactionType } from "@interfaces/transaction";
import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios from "axios";
import AxiosResponseType from '@interfaces/axiosResponse';

async function getAdminTransactions(token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/admin/transactions', getConfig(token));
		return (res.data.data as TransactionType[]);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function getAdminTransaction(userId : string, token : string) {
	try {
		const res = await axios.get(URL + '/admin/transaction/' + userId, getConfig(token));
		return (res.data.data as TransactionType[]);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}


export {
	getAdminTransactions,
	getAdminTransaction
};