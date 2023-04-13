import AxiosResponseType from '@interfaces/axiosResponse';
import { PostSigninType, TokenType } from '@interfaces/signin';
import { URL } from '@lib/constants';
import axios from 'axios';

export default async function PostSignin(body : PostSigninType){
	try {
		const res = await axios.post<AxiosResponseType>(URL + '/signin', body);
		return (res.data.data as TokenType);
	} catch (error) {
		throw (error);
	}
}