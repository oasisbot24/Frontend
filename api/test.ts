import axios from 'axios';

export default async function test() {
	try {
		const res = await axios.get('/test');
		console.log(res.data);
		return (res.data);
	} catch (error) {
		console.log(error);
		throw (error);
	}
}