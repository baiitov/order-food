import React from 'react'
import styled from 'styled-components'

const SummaryCard = () => {
	return (
		<Card>
			<StyledTitle>Delicious Food, Delivered To You</StyledTitle>
			<p>
				Choose your favorite meal from our broad selection of available
				meals and enjoy a delicious lunch or dinner at home.
			</p>
			<p>
				All our meals are cooked with high-quality ingredients,
				just-in-time and of course by experienced chefs!
			</p>
		</Card>
	)
}

export default SummaryCard
const Card = styled.div`
	max-width: 53.375rem;
	padding: 36px 54px;
	background: #383838;
	box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
	border-radius: 16px;
	margin: -12rem auto;
	color: white;
	position: relative;
	text-align: center;
	line-height: 24px;
	font-size: 16px;
`
const StyledTitle = styled.h1`
	font-weight: 600;
	font-size: 36px;
	line-height: 54px;
`
