import { getAdminPointChangeInfo } from '@api/admin/pointChangeInfo';
import { getAdminPointTopup } from '@api/admin/pointTopup';
import { getAdminTransaction } from '@api/admin/transaction';
import { getAdminUser, getAdminUsers } from '@api/admin/user';
import { getToken } from '@lib/token';
import router from 'next/router';

async function createAdminUsers(setUsers : Function) {
	try {
		const token = getToken()
		if (token.token === "") throw new Error("token is null");
		const users = await getAdminUsers();
		setUsers(users);
	} catch (error) {
		router.push("/admin");
	}
}

async function createAdminUser(userid:number, 
	setUser : Function, setTransaction : Function, 
	setPointTopup : Function, setPointChangeInfo : Function) {
	try {
		const token = getToken();
		if (token.token === "") throw new Error("token is null");
		const user = await getAdminUser(userid);
		setUser(user);
		const transaction = await getAdminTransaction(userid);
		setTransaction(transaction);
		const pointTopup = await getAdminPointTopup(userid);
		setPointTopup(pointTopup);
		const pointChangeInfo = await getAdminPointChangeInfo(userid);
		setPointChangeInfo(pointChangeInfo);
	} catch (error) {
		router.push("/admin");
	}
} 

export {
	createAdminUsers,
	createAdminUser
}