import { TransactionType, PostTransactionType } from "@interfaces/transaction";
import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios from "axios";
import AxiosResponseType from '@interfaces/axiosResponse';

async function getTransaction(token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/transaction', getConfig(token));
		return (res.data.data as TransactionType[]);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function postTransaction(body : PostTransactionType, token : string) {
	try {
		const res = await axios.post<AxiosResponseType>(URL + '/transaction', body, getConfig(token));
		return ;
	} catch (error) {
		console.log(error);
		throw (error);
	}
}


export {
	getTransaction,
	postTransaction
};