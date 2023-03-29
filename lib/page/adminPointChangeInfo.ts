import { getAdminPointChangeInfos } from '@api/admin/pointChangeInfo';
import router from 'next/router';

async function createAdminPointChangeInfos(token : string, setPointChangeInfos : Function) {
	try {
		if (token === "") throw new Error("token is null");
		const pointTopups = await getAdminPointChangeInfos(token);
		setPointChangeInfos(pointTopups);
	} catch (error) {
		router.push("/admin");
	}
}

export {
	createAdminPointChangeInfos,
}