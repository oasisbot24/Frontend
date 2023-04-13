import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios, { AxiosError } from "axios";
import AxiosResponseType from '@interfaces/axiosResponse';
import { PointChangeInfoType, PostPointChangeInfoType } from '@interfaces/pointChangeInfo';
import { checkRefresh } from "@lib/check";

async function getAdminPointChangeInfos() {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/admin/point_change_infos', getConfig());
			return (res.data.data as PointChangeInfoType[]);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function getAdminPointChangeInfo(userid : number) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/admin/point_change_info/' + userid.toString(), getConfig());
			return (res.data.data as PointChangeInfoType[]);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

async function postAdminPointChangeInfo(userid : number, body : PostPointChangeInfoType ) {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.post(URL + '/admin/point_change_info/' + userid.toString(), body, getConfig());
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
	getAdminPointChangeInfos,
	getAdminPointChangeInfo,
	postAdminPointChangeInfo
};