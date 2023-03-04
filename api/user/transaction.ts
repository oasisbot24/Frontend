import UserType from "@interfaces/user";
import { URL } from "@lib/constants";
import axios from "axios";

function getTransaction() {
	return new Promise<UserType>(async (resolve, reject) => {
		try {
			const res = await axios.get(URL + '/transaction');
			return resolve(res.data);
		} catch (error) {
			console.log(error);
			return reject(error);
		}
	});
}

function postTransaction() {
	const body = {
		email : "",
		password : "",
		phone : "",
		nick_name : ""
	}
	axios.post(URL + '/transaction', body);
}


export {
	getTransaction,
	postTransaction
};