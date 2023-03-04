import UserType from "@interfaces/user";
import { URL } from "@lib/constants";
import axios from "axios";

function getPointTopup() {
	return new Promise<UserType>(async (resolve, reject) => {
		try {
			const res = await axios.get(URL + '/point_topup');
			return resolve(res.data);
		} catch (error) {
			console.log(error);
			return reject(error);
		}
	});
}

function getPointTopupLast() {
	return new Promise<UserType>(async (resolve, reject) => {
		try {
			const res = await axios.get(URL + '/point_topup/last');
			return resolve(res.data);
		} catch (error) {
			console.log(error);
			return reject(error);
		}
	});
}

function postPointTopup() {
	const body = {
		amount : "",
		tag : ""
	}
	axios.post(URL + '/point_topup', body);
}


export {
	getPointTopup,
	getPointTopupLast,
	postPointTopup
};