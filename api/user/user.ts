import UserType from "@interfaces/user";
import { URL } from "@lib/constants";
import axios from "axios";

function getUser() {
	return new Promise<UserType>(async (resolve, reject) => {
		try {
			const res = await axios.get(URL + '/user');
			return resolve(res.data);
		} catch (error) {
			console.log(error);
			return reject(error);
		}
	});
}

function postUser() {
	const body = {
		email : "",
		password : "",
		phone : "",
		nick_name : ""
	}
	axios.post(URL + '/user', body);
}

function putUser() {
	const body = {
		email : "",
		password : "",
		phone : "",
		nick_name : ""
	}
	axios.put(URL + '/user', body);
}

function patchUser() {
	const body = {
		email : "",
		password : "",
		phone : "",
		nick_name : ""
	}
	axios.patch(URL + '/user', body);
}

function deleteUser() {
	const body = {
		email : "",
		password : "",
		phone : "",
		nick_name : ""
	}
	axios.delete(URL + '/user');
}

export {
	getUser,
	postUser,
	putUser,
	patchUser,
	deleteUser
};