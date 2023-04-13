import { getPointTopupLast } from "@api/user/pointTopup";
import { getToken } from "@lib/token";
import router from 'next/router';

async function createPointshop(setPointTopup : Function) {
	try {
		const token = getToken()
		if (token.token === "") throw new Error("token is null");
		const pointTopup = await getPointTopupLast();
		if (pointTopup === null) 
			return ;
		if (pointTopup.condition === 0)
			setPointTopup(pointTopup);
	} catch (error) {
		console.log(error);
		router.push("/signin");
	}
}

export {
	createPointshop,
}