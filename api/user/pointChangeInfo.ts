import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios, { AxiosError } from "axios";
import AxiosResponseType from '@interfaces/axiosResponse';
import {PointChangeInfoType} from "@interfaces/pointChangeInfo";
import { checkRefresh } from "@lib/check";

async function getPointChangeInfo() {
	for (let i = 0; i < 2; i++){
		try {
			const res = await axios.get<AxiosResponseType>(URL + '/point_change_info', getConfig());
			return (res.data.data as PointChangeInfoType);
		} catch (error) {
			if (i == 0 && checkRefresh(error as AxiosError))
				continue;
			throw (error);
		}
	}
	throw ("To many request");
}

export {
	getPointChangeInfo
};