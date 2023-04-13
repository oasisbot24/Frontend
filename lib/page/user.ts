import { getUser } from '@api/user/user';
import { getToken } from '@lib/token';
import router from 'next/router';

async function createEdit(setUser : Function) {
	try {
		const token = getToken()
		if (token.token === "") throw new Error("token is null");
		const user = await getUser();
		setUser(user);
	} catch (error) {
		router.push("/signin");
	}
}
  
export {
	createEdit
}