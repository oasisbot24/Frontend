import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios from "axios";
import AxiosResponseType from '@interfaces/axiosResponse';
import { PointChangeInfoType, PostPointChangeInfoType } from '@interfaces/pointChangeInfo';

async function getAdminPointChangeInfos(token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/admin/point_change_infos', getConfig(token));
		return (res.data.data as PointChangeInfoType[]);
	} catch (error) {
		console.log(error);
		throw(error);
	}
}

async function getAdminPointChangeInfo(userid : number, token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/admin/point_change_info/' + userid.toString(), getConfig(token));
		return (res.data.data as PointChangeInfoType[]);
	} catch (error) {
		console.log(error);
		throw(error);
	}
}

async function postAdminPointChangeInfo(userid : number, body : PostPointChangeInfoType , token : string) {
	try {
		const res = await axios.post(URL + '/admin/point_change_info/' + userid.toString(), body, getConfig(token));
		return ;
	} catch (error) {
		console.log(error);
		throw(error);
	}
}

export {
	getAdminPointChangeInfos,
	getAdminPointChangeInfo,
	postAdminPointChangeInfo
};