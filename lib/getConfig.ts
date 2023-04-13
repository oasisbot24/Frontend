import { getToken } from "@lib/token";
import { AxiosRequestConfig } from "axios"

function getConfig() {
	const token = getToken();
	const config : AxiosRequestConfig = {
		headers: {
			Authorization: "Bearer " + token.token,
			AuthorizationRefresh: "Bearer " + token.refresh_token
		}
	}
	return config;
}

export default getConfig