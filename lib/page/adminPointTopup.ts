import { getAdminPointTopups } from '@api/admin/pointTopup';
import { getToken } from '@lib/token';
import router from 'next/router';

async function createAdminPointTopups(setPointTopups : Function) {
	try {
		const token = getToken()
		if (token.token === "") throw new Error("token is null");
		const pointTopups = await getAdminPointTopups();
		setPointTopups(pointTopups);
	} catch (error) {
		router.push("/admin");
	}
}

export {
	createAdminPointTopups,
}