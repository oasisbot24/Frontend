import { PointTopupType, PostPointTopupType } from "@interfaces/pointTopup";
import { URL } from "@lib/constants";
import axios, { AxiosError } from "axios";
import getConfig from '@lib/getConfig';
import AxiosResponseType from '@interfaces/axiosResponse';
import { checkRefresh } from "@lib/check";

async function getPointTopup() {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/point_topup', getConfig());
			return (res.data.data as PointTopupType[]);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function getPointTopupLast() {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/point_topup/last', getConfig());
			return (res.data.data as PointTopupType);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function postPointTopup(body : PostPointTopupType) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.post<AxiosResponseType>(URL + '/point_topup', body, getConfig());
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
	getPointTopup,
	getPointTopupLast,
	postPointTopup
};