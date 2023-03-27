import PointChangeInfoType from "@interfaces/pointChangeInfo";
import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios from "axios";

async function getPointChangeInfo(token : string) {
	try {
		const res = await axios.get<PointChangeInfoType>(URL + '/point_change_info', getConfig(token));
		return (res.data);
	} catch (error) {
		console.log(error);
		throw(error);
	}
}

export {
	getPointChangeInfo
};