import { createContext, useState } from 'react'

export const BasketContext = createContext({
	items: [],
})

const BasketProvider = ({ children }) => {
	const [items, setItems] = useState([])
	const addToBasket = (newItem) => {
		setItems((prevState) => {
			const doesItemExist = prevState.find(
				(oldItem) => oldItem.id === newItem.id,
			)
			if (!doesItemExist) {
				return [...prevState, newItem]
			}
			const updatedItems = prevState.map((oldItem) => {
				if (oldItem.id === newItem.id) {
					oldItem.amount = oldItem.amount + newItem.amount
				}
				return oldItem
			})
			return updatedItems
		})
	}
	const state = {
		items,
		addToBasket,
	}
	return (
		<BasketContext.Provider value={state}>
			{children}
		</BasketContext.Provider>
	)
}
export default BasketProvider
