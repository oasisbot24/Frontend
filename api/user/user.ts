import { PutUserType, UserType } from "@interfaces/user";
import { URL } from "@lib/constants";
import axios, { AxiosError } from "axios";
import getConfig from "@lib/getConfig";
import AxiosResponseType from '@interfaces/axiosResponse';
import { checkRefresh } from "@lib/check";

async function getUser() {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/user', getConfig());
			return (res.data.data as UserType);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function putUser(body : PutUserType) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.put<AxiosResponseType>('/user', body, getConfig());
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
	getUser,
	putUser,
};