import { getPointTopupLast } from "@api/user/pointTopup";
import router from 'next/router';

async function createPointshop(token : string, setPointTopup : Function) {
	try {
		if (token === "") throw new Error("token is null");
		const pointTopup = await getPointTopupLast(token);
		if (pointTopup === null) 
			throw new Error("pointTopup is null");
		if (pointTopup.condition === 0)
			setPointTopup(pointTopup);
	} catch (error) {
		router.push("/signin");
	}
}

export {
	createPointshop,
}