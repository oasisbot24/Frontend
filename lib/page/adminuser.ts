import { getAdminPointChangeInfo } from '@api/admin/pointChangeInfo';
import { getAdminPointTopup } from '@api/admin/pointTopup';
import { getAdminTransaction } from '@api/admin/transaction';
import { getAdminUser, getAdminUsers } from '@api/admin/user';
import router from 'next/router';

async function createAdminUsers(token : string, setUsers : Function) {
	try {
		if (token === "") throw new Error("token is null");
		const users = await getAdminUsers(token);
		setUsers(users);
	} catch (error) {
		router.push("/admin");
	}
}

async function createAdminUser(token : string, userid:number, 
	setUser : Function, setTransaction : Function, 
	setPointTopup : Function, setPointChangeInfo : Function) {
	try {
		if (token === "") throw new Error("token is null");
		const user = await getAdminUser(userid, token);
		setUser(user);
		const transaction = await getAdminTransaction(userid, token);
		setTransaction(transaction);
		const pointTopup = await getAdminPointTopup(userid, token);
		setPointTopup(pointTopup);
		const pointChangeInfo = await getAdminPointChangeInfo(userid, token);
		setPointChangeInfo(pointChangeInfo);
	} catch (error) {
		router.push("/admin");
	}
} 

export {
	createAdminUsers,
	createAdminUser
}