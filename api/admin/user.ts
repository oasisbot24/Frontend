import { UserType, PutAdminUserType } from '@interfaces/user';
import { URL } from "@lib/constants";
import axios, { AxiosError } from "axios";
import getConfig from "@lib/getConfig";
import AxiosResponseType from '@interfaces/axiosResponse';
import { checkRefresh } from '@lib/check';

async function getAdminUsers() {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/admin/users', getConfig());
			return (res.data.data as UserType[]);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function getAdminUser(userid : number) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/admin/user/' + userid.toString(), getConfig());
			return (res.data.data as UserType);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function putAdminUser(userid : number, body : PutAdminUserType) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.put(URL + '/admin/user/' + userid.toString(), body, getConfig());
			return ;
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function deleteAdminUser(userid : number) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.delete(URL + '/admin/user/' + userid.toString(), getConfig());
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
	getAdminUsers,
	getAdminUser,
	putAdminUser,
	deleteAdminUser
};