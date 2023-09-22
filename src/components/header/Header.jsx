import React, { useContext } from 'react'
import styled from 'styled-components'
import BasketButton from './BasketButton'
import { BasketContext } from '../../store/BasketContext'

const Header = ({ modalToggleHandler }) => {
	const { items } = useContext(BasketContext)

	const calculatorTotalAmount = () => {
		const sum = items.reduce((s, item) => {
			return s + item.amount
		}, 0)
		return sum
	}

	return (
		<Container>
			<Text>React Meals</Text>
			<BasketButton
				totalAmount={calculatorTotalAmount()}
				modalToggleHandler={modalToggleHandler}
			/>
		</Container>
	)
}

export default Header
const Container = styled.header`
	width: 100%;
	height: 101px;
	background-color: #8a2b06;
	display: flex;
	justify-content: space-between;
	/* padding-left: 80px; *
	/* padding-right: 120px; */
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 1;
`
const Text = styled.p`
	font-weight: 600;
	font-size: 38px;
	line-height: 57px;
	margin: 0;
	color: #ffffff;
	margin-left: 120px;
`
