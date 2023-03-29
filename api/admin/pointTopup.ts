import { PointTopupType, PostPointTopupType } from "@interfaces/pointTopup";
import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios from "axios";
import AxiosResponseType from '@interfaces/axiosResponse';

async function getAdminPointTopups(token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/admin/point_topups', getConfig(token));
		return (res.data.data as PointTopupType[]);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function getAdminPointTopup(userid : number, token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/admin/point_topup/' + userid.toString(),
		getConfig(token));
		return (res.data.data as PointTopupType);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function putAdminPointTopup(userid : number , condition : boolean, token : string) {
	try {
		const res = await axios.put(URL + '/admin/point_topup/' + userid.toString(), 
		{condition : condition},
		getConfig(token));
		return ;
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

export {
	getAdminPointTopups,
	getAdminPointTopup,
	putAdminPointTopup
};