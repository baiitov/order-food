import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import TotalAmount from './TotalAmount'
import BasketItem from './BasketItem'
import styled from 'styled-components'
import { BasketContext } from '../../store/BasketContext'
import useCounter from '../hooks/UseCounter'
import Button from '../UI/Button'
const Basket = ({ modalToggleHandler }) => {
	const { items } = useContext(BasketContext)
	const getTotalPrice = () => {
		return items.reduce((sum, { price, amount }) => sum + amount * price, 0)
	}
	const { counter, discrementHandler, icrementHanlder } = useCounter()
	return (
		<Modal onClose={modalToggleHandler}>
			<StyledContainer>
				<FiwedHeightContainer>
					{items.map((el) => {
						return (
							<BasketItem
								key={el.id}
								title={el.title}
								price={el.price}
								amount={el.amount}
								id={el.id}
							/>
						)
					})}
				</FiwedHeightContainer>
				<Button onClick={discrementHandler}>+</Button>
				<span>{counter}</span>
				<Button onClick={icrementHanlder}>-</Button>
				<TotalAmount
					modalToggleHandler={modalToggleHandler}
					totalPrice={getTotalPrice()}
				/>
			</StyledContainer>
		</Modal>
	)
}

export default Basket
const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 1.5rem 0rem;
`
const FiwedHeightContainer = styled.div`
	max-height: 228px;
	overflow-y: scroll;
	padding-bottom: 30px;
`
