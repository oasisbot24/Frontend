import { TransactionType, PostTransactionType } from "@interfaces/transaction";
import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios, { AxiosError } from "axios";
import AxiosResponseType from '@interfaces/axiosResponse';
import { checkRefresh } from "@lib/check";

async function getAdminTransactions() {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/admin/transactions', getConfig());
			return (res.data.data as TransactionType[]);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function getAdminTransaction(userid : number) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/admin/transaction/' + userid.toString(), getConfig());
			return (res.data.data as TransactionType[]);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}


export {
	getAdminTransactions,
	getAdminTransaction
};