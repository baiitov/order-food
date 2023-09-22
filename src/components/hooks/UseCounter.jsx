import { useState } from 'react'

const useCounter = () => {
	const [counter, setCounter] = useState(0)
	const discrementHandler = () => {
		setCounter((prevState) => prevState + 1)
	}
	const icrementHanlder = () => {
		if (counter > 0) {
			setCounter((prevState) => prevState - 1)
		}
	}
	return {
		discrementHandler,
		icrementHanlder,
		counter,
	}
}
export default useCounter
