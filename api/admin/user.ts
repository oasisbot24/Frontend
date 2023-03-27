import { UserType, PutAdminUserType } from '@interfaces/user';
import { URL } from "@lib/constants";
import axios from "axios";
import getConfig from "@lib/getConfig";
import AxiosResponseType from '@interfaces/axiosResponse';

async function getAdminUsers(token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/admin/users', getConfig(token));
		return (res.data.data as UserType[]);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function getAdminUser(userid : number, token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/admin/user/' + userid.toString(), getConfig(token));
		return (res.data.data as UserType);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function putAdminUser(userid : number, body : PutAdminUserType, token : string) {
	try {
		const res = await axios.put<AxiosResponseType>(URL + '/admin/user/' + userid.toString(), body, getConfig(token));
		return ;
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

export {
	getAdminUsers,
	getAdminUser,
	putAdminUser
};