import { TransactionType, PostTransactionType } from "@interfaces/transaction";
import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios, { AxiosError } from "axios";
import AxiosResponseType from '@interfaces/axiosResponse';
import { checkRefresh } from "@lib/check";

async function getTransaction() {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/transaction', getConfig());
			return (res.data.data as TransactionType[]);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function postTransaction(body : PostTransactionType) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.post<AxiosResponseType>(URL + '/transaction', body, getConfig());
			return ;
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}


export {
	getTransaction,
	postTransaction
};