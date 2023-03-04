import { URL } from '@lib/constants';
import axios from 'axios';

export default async function test() {
	try {
		const res = await axios.get(URL + 'test');
		return (res.data);
	} catch (error) {
		console.log(error);
	}
}