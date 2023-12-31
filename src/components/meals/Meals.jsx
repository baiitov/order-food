import React, { memo } from 'react'
import styled from 'styled-components'
import MealItem from './meal-item/MealItem'
const D_DATA = [
	[
		{
			id: '1',
			title: 'sushi',
			description: 'Finest fish and veggies',
			price: 22.99,
		},
		{
			id: '2',
			title: 'Schnitzel',
			description: 'American  raw, meaty',
			price: 16.99,
		},
		{
			id: '3',
			title: 'sushi',
			description: 'Finest fish and veggies',
			price: 22.99,
		},
		{
			id: '4',
			title: 'Schnitzel',
			description: 'American  raw, meaty',
			price: 16.99,
		},
	],
]
const Meals = () => {
	return (
		<Card>
			{D_DATA.map((meal) => {
				return <MealItem meal={meal} key={meal.id} />
			})}
		</Card>
	)
}

export default memo(Meals)

const Card = styled.div`
	background: #ffffff;
	border-radius: 16px;
	width: 75%;
	margin: 40px auto;
	padding: 30px 30px 36px 30px;
`
