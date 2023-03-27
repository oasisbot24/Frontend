import { useContext } from 'react';
import { SigninContext } from '@components/basic/signinContext';

function useToken() {
  	const context = useContext(SigninContext);
	return context;
}

export default useToken