import React, { useContext, useState } from 'react'
import Button from '../../UI/Button'
import { ReactComponent as PluseIcon } from '../../../assets/icon/plus-icon.svg.svg'
import styled from 'styled-components'
import { BasketContext } from '../../../store/BasketContext'

const MealItemForm = ({ id, title, price }) => {
	const context = useContext(BasketContext)
	const [amount, setAmount] = useState(1)
	const amountChange = (e) => {
		setAmount(+e.target.value)
	}
	const onSubmitHandler = (event) => {
		event.preventDefault()
		const basket = {
			id,
			title,
			price,
			amount,
		}
		context.addToBasket(basket)
	}
	return (
		<StyledForm onSubmit={onSubmitHandler}>
			<Container>
				<label htmlFor={id}>Amount</label>
				<input
					onChange={amountChange}
					type='number'
					id={id}
					min={1}
					max={5}
					defaultValue={amount}
				/>
			</Container>
			<Button>
				<StyledIcon />
				Add
			</Button>
		</StyledForm>
	)
}

export default MealItemForm

const StyledIcon = styled(PluseIcon)`
	margin-right: 10px;
`

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`

const Container = styled.div`
	margin-bottom: 12px;
	label {
		font-weight: 600;
		font-size: 18px;
		line-height: 27px;
		color: #222222;
		margin-right: 20px;
	}
	input {
		width: 60px;
		height: 32px;
		border: 1px solid #d6d6d6;
		border-radius: 6px;
		outline: none;
		padding: 4px 12px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
	}
`
