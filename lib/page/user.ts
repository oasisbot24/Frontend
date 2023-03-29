import { getUser } from '@api/user/user';
import router from 'next/router';

async function createEdit(token : string, setUser : Function) {
	try {
		if (token === "") throw new Error("token is null");
		const user = await getUser(token);
		setUser(user);
	} catch (error) {
		router.push("/signin");
	}
}
  
export {
	createEdit
}