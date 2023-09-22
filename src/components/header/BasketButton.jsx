import React from 'react'
import { ReactComponent as BasketIcon } from '../../assets/icon/BasketIcon.svg'
import styled from 'styled-components'
const BasketButton = ({ modalToggleHandler, totalAmount }) => {
	return (
		<StyledButton onClick={modalToggleHandler}>
			<BasketIcon />
			<StyledSpan>Your cart</StyledSpan>
			<SpanCounter id='count'>{totalAmount}</SpanCounter>
		</StyledButton>
	)
}

export default BasketButton
const StyledButton = styled.button`
	border-radius: 20px;
	padding: 12px 32px;
	font-weight: 600;
	line-height: 24px;
	color: #ffffff;
	border: none;
	background: #4a1703;
	display: flex;
	margin-right: 120px;
	align-items: center;
	cursor: pointer;
	&:hover {
		background: #611e03;
	}
	&:hover > #count {
		background: #4a1703;
	}
`

const StyledSpan = styled.span`
	margin-left: 12px;
	margin-right: 24px;
`
const SpanCounter = styled.span`
	background: #8a2b06;
	border-radius: 30px;
	font-weight: 700;
	line-height: 27px;
	color: #ffffff;
	padding: 4px 20px;
`
