import { getAdminPointChangeInfos } from '@api/admin/pointChangeInfo';
import { getToken } from '@lib/token';
import router from 'next/router';

async function createAdminPointChangeInfos(setPointChangeInfos : Function) {
	try {
		const token = getToken()
		if (token.token === "") throw new Error("token is null");
		const pointTopups = await getAdminPointChangeInfos();
		setPointChangeInfos(pointTopups);
	} catch (error) {
		router.push("/admin");
	}
}

export {
	createAdminPointChangeInfos,
}