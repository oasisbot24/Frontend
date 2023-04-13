import { useEffect } from 'react'
import { TokenType } from '@interfaces/signin';
import React from 'react';

type Props = {
	children : React.ReactNode
}

export default function Content({ children } : Props) {
  return (
	<>
		{children}
	</>
  )
}
