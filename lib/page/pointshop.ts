import { getPointTopupLast } from "@api/user/pointTopup";

async function createPointshop(token : string, setPointTopup : Function) {
	try {
		//if (token === "") throw new Error("token is null");
		const pointTopup = await getPointTopupLast(token);
		if (pointTopup === null) 
			throw new Error("pointTopup is null");
		if (pointTopup.condition === 0)
			setPointTopup(pointTopup);
	} catch (error) {
		console.log(error);
		//router.push("/signin");
	}
}

export {
	createPointshop,
}