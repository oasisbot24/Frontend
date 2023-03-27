import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios from "axios";
import AxiosResponseType from '@interfaces/axiosResponse';
import PointChangeInfoType from "@interfaces/pointChangeInfo";

async function getPointChangeInfo(token : string) {
	try {
		const res = await axios.get<AxiosResponseType>(URL + '/point_change_info', getConfig(token));
		return (res.data.data as PointChangeInfoType);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

export {
	getPointChangeInfo
};