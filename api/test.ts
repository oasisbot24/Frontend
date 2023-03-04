import { URL } from '@lib/constants';
import axios from 'axios';

export default function test() {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.get(URL + '/test');
			return resolve(res.data);
		} catch (error) {
			console.log(error);
			return reject(error);
		}
	});
}