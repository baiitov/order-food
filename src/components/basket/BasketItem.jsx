import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useContext } from 'react'
import { BasketContext } from '../../store/BasketContext'

const BasketItem = ({ price, id, amount, title }) => {
	const { addToBasket } = useContext(BasketContext)
	const updateBasket = () => {
		addToBasket({ id, amount })
	}
	return (
		<Container>
			<StyledTitle>{title}</StyledTitle>
			<Content>
				<PriceAmountContainer>
					<StyledPrice>{price}</StyledPrice>
					<AmountStyle>{amount}x</AmountStyle>
				</PriceAmountContainer>
				<CounterContainer>
					<Button>-</Button>
					<Button onClick={updateBasket}>+</Button>
				</CounterContainer>
			</Content>
		</Container>
	)
}

export default BasketItem

const Container = styled.div`
	padding: 24px 0;
	border-bottom: 1px solid black;
	width: 100%;
	margin-bottom: 30px;
`
const StyledTitle = styled.p`
	font-weight: 600;
	font-size: 20px;
	line-height: 30px;
	color: #222222;
	margin: 0 0 12px;
`
const PriceAmountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 153px;
	margin: 0;
`
const CounterContainer = styled.div`
	display: flex;
	> button {
		margin-right: 24px;
	}
`
const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const AmountStyle = styled.span`
	border: 1px solid #d6d6d6;
	border-radius: 6px;
	padding: 6px 14px;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	display: block;
	color: #222222;
	margin: 0;
`
const StyledPrice = styled.p`
	margin: 0;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	color: #222222;
`
