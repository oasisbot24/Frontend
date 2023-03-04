import UserType from "@interfaces/user";
import { URL } from "@lib/constants";
import axios from "axios";

function getPointChangeInfo() {
	return new Promise<UserType>(async (resolve, reject) => {
		try {
			const res = await axios.get(URL + '/point_change_info');
			return resolve(res.data);
		} catch (error) {
			console.log(error);
			return reject(error);
		}
	});
}

export {
	getPointChangeInfo
};