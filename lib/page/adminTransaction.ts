import router from 'next/router';
import { getAdminTransactions } from '@api/admin/transaction'

async function createAdminTransactions(token : string, setTransaction : Function) {
	try {
		if (token === "") throw new Error("token is null");
		const transactions = await getAdminTransactions(token);
		setTransaction(transactions);
	} catch (error) {
		router.push("/admin");
	}
}

export {
	createAdminTransactions,
}