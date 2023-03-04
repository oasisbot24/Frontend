import UserType from "@interfaces/user";
import { URL } from "@lib/constants";
import axios from "axios";

function getAdminUsers() {
	return new Promise<UserType[]>(async (resolve, reject) => {
		try {
			const res = await axios.get(URL + '/admin/users');
			return resolve(res.data);
		} catch (error) {
			console.log(error);
			return reject(error);
		}
	});
}

function getAdminUser() {
	return new Promise<UserType>(async (resolve, reject) => {
		try {
			const res = await axios.get(URL + '/admin/user');
			return resolve(res.data);
		} catch (error) {
			console.log(error);
			return reject(error);
		}
	});
}

function putAdminUser() {
	const body = {
		email : "",
		password : "",
		phone : "",
		nick_name : ""
	}
	axios.put(URL + '/admin/user', body);
}

function deleteAdminUser() {
	axios.delete(URL + '/admin/user');
}

export {
	getAdminUsers,
	getAdminUser,
	putAdminUser,
	deleteAdminUser
};