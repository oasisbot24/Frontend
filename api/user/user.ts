import { PutUserType, UserType } from "@interfaces/user";
import { URL } from "@lib/constants";
import axios from "axios";
import { PostUserType } from "@interfaces/user";
import getConfig from "@lib/getConfig";
import AxiosResponseType from '@interfaces/axiosResponse';

async function getUser(token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/user', getConfig(token));
		return (res.data.data as UserType);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function postUser(body : PostUserType) {
	try {
		const res = await axios.post<AxiosResponseType>('/user', body);
		return ;
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function putUser(body : PutUserType ,token : string) {
	try {
		const res = await axios.put<AxiosResponseType>('/user', body, getConfig(token));
		return ;
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

export {
	getUser,
	postUser,
	putUser,
};