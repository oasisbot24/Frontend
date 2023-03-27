import { PointTopupType, PostPointTopupType } from "@interfaces/pointTopup";
import { URL } from "@lib/constants";
import getConfig from "@lib/getConfig";
import axios from "axios";

async function getPointTopup(token : string) {
	try {
		const res = await axios.get<PointTopupType[]>(URL + '/point_topup', getConfig(token));
		return (res.data);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function getPointTopupLast(token : string) {
	try {
		const res = await axios.get<PointTopupType>(URL + '/point_topup/last', getConfig(token));
		return (res.data);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}

async function postPointTopup(body : PostPointTopupType, token : string) {
	try {
		const res = await axios.post(URL + '/point_topup', body, getConfig(token));
		return (res.data);
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