import { createContext, useState } from 'react';
import React from "react";

type Props = {
	children : React.ReactNode
}

const SigninContext = createContext({
	token : "", setToken : (value : string) => {}
});

function SigninProvider({children} : Props) {
	const [token, setToken] = useState("");

	return (
    	<SigninContext.Provider value={{token : token, setToken : setToken}}>
			{children}
		</SigninContext.Provider>
	);
}

export {
	SigninContext,
	SigninProvider
}