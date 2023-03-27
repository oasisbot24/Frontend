import { AxiosRequestConfig } from "axios"
import useToken from '@lib/useToken';

function getConfig(token : string) {
	const config : AxiosRequestConfig = {
		headers: {
			Authorization: "Bearer " + token
		}
	}
	return config;
}

export default getConfig