import router from 'next/router';
import { getAdminTransactions } from '@api/admin/transaction';
import { getToken } from '@lib/token';

async function createAdminTransactions(setTransaction : Function) {
	try {
		const token = getToken()
		if (token.token === "") throw new Error("token is null");
		const transactions = await getAdminTransactions();
		setTransaction(transactions);
	} catch (error) {
		router.push("/admin");
	}
}

export {
	createAdminTransactions,
}