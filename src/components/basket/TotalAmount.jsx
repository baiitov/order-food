import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'

const TotalAmount = ({ totalPrice, modalToggleHandler }) => {
	return (
		<div>
			<StyledTitleContainer>
				<StyledTitle>Total Amount</StyledTitle>
				<StyledPrice>{totalPrice.toFixed(2)}$</StyledPrice>
			</StyledTitleContainer>
			<ActionButtonContainer>
				<Button variant='order' onClick={modalToggleHandler}>Close</Button>
				<Button>Order</Button>
			</ActionButtonContainer>
		</div>
	)
}

export default TotalAmount

const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
`
const ActionButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 24px;
	gap: 1rem;
`
const StyledTitle = styled.p`
	font-weight: 700;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
	color: #222222;
`
const StyledPrice = styled.p`
	font-weight: 600;
	font-size: 22px;
	color: #8a2b06;
	line-height: 33px;
`
