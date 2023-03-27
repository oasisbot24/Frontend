import { PointTopupType, PostPointTopupType } from "@interfaces/pointTopup";
import { URL } from "@lib/constants";
import axios from "axios";
import getConfig from '@lib/getConfig';
import AxiosResponseType from '@interfaces/axiosResponse';

async function getPointTopup(token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/point_topup', getConfig(token));
		return (res.data.data as PointTopupType[]);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function getPointTopupLast(token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/point_topup/last', getConfig(token));
		return (res.data.data as PointTopupType);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function postPointTopup(body : PostPointTopupType, token : string) {
	try {
		const res = await axios.post<AxiosResponseType>(URL + '/point_topup', body, getConfig(token));
		return ;
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

export {
	getPointTopup,
	getPointTopupLast,
	postPointTopup
};