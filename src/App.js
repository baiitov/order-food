import { useMemo, useState } from 'react'
import './App.css'
import Basket from './components/basket/Basket'
import Header from './components/header/Header'
import Meals from './components/meals/Meals'
import Summary from './components/summary/Summary'
import BasketProvider from './store/BasketContext'
import Button from './components/UI/Button'
import useCounter from './components/hooks/UseCounter'

function App() {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const { counter, discrementHandler, icrementHanlder } = useCounter()

	const modalToggleHandler = () => {
		setIsModalVisible((prevState) => !prevState)
	}

	// const DYMMY_MILS = useMemo(() => {
	// 	const notSorted = [...D_DATA]
	// 	return notSorted.sort((a, b) => {
	// 		if (sortDirection === 'ask') {
	// 			return a.price - b.price
	// 		}
	// 		return b.price - a.price
	// 	})
	// }, [sortDirection])

	return (
		<BasketProvider>
			<Header modalToggleHandler={modalToggleHandler} />
			<Summary />
			<Meals />
			{isModalVisible && (
				<Basket modalToggleHandler={modalToggleHandler} />
			)}
		</BasketProvider>
	)
}

export default App

// useMemo
// useCallback
// Memo
