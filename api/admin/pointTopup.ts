import { PointTopupType, PostPointTopupType } from "@interfaces/pointTopup";
import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios, { AxiosError } from "axios";
import AxiosResponseType from '@interfaces/axiosResponse';
import { checkRefresh } from "@lib/check";

async function getAdminPointTopups() {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/admin/point_topups', getConfig());
			return (res.data.data as PointTopupType[]);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function getAdminPointTopup(userid : number) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/admin/point_topup/' + userid.toString(),
			getConfig());
			return (res.data.data as PointTopupType);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function putAdminPointTopup(userid : number , condition : boolean) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.put(URL + '/admin/point_topup/' + userid.toString(), 
			{condition : condition},
			getConfig());
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
	getAdminPointTopups,
	getAdminPointTopup,
	putAdminPointTopup
};