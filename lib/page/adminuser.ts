import { getAdminUser, getAdminUsers } from '@api/admin/user';
import router from 'next/router';

async function createAdminUserIndex(token : string, setUsers : Function) {
	try {
		if (token === "") throw new Error("token is null");
		const users = await getAdminUsers(token);
		setUsers(users);
	} catch (error) {
		router.push("/admin");
	}
}

async function createAdminUser(token : string, userid:number, setUser : Function) {
	try {
		if (token === "") throw new Error("token is null");
		const user = await getAdminUser(userid, token);
		setUser(user);
	} catch (error) {
		router.push("/admin");
	}
} 

export {
	createAdminUserIndex,
	createAdminUser
}