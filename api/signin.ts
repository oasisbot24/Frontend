import AxiosResponseType from '@interfaces/axiosResponse';
import { PostSigninType, SigninType } from '@interfaces/signin';
import { URL } from '@lib/constants';
import axios from 'axios';

export default async function PostSignin(body : PostSigninType){
	try {
		const res = await axios.post<AxiosResponseType>(URL + '/signin', body);
		return (res.data.data as SigninType);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}