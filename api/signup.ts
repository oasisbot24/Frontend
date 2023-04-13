import AxiosResponseType from "@interfaces/axiosResponse";
import { PostUserType } from "@interfaces/user";
import axios from "axios";

export default async function postUser(body : PostUserType) {
	try {
		const res = await axios.post<AxiosResponseType>('/signup', body);
		return ;
	} catch (error) {
		throw (error);
	}
}

