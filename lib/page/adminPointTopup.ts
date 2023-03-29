import { getAdminPointTopups } from '@api/admin/pointTopup';
import router from 'next/router';

async function createAdminPointTopups(token : string, setPointTopups : Function) {
	try {
		if (token === "") throw new Error("token is null");
		const pointTopups = await getAdminPointTopups(token);
		setPointTopups(pointTopups);
	} catch (error) {
		router.push("/admin");
	}
}

export {
	createAdminPointTopups,
}