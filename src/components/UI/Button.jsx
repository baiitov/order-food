import React from 'react'
import styled from 'styled-components'

const Button = ({ children, onClick, variant = 'contained' }) => {
	return (
		<StyledButton variant={variant} onClick={onClick}>
			{children}
		</StyledButton>
	)
}

export default Button

const getBackground = (props) => {
	return props.variant === 'contained' ? '#8a2b06' : '#ffffff'
}
const getColor = (props) => {
	return props.variant === 'contained' ? '#fff' : '#8a2b06'
}
const getBorder = (props) => {
	return props.variant === 'contained' ? 'none' : '1px solid #8a2b06'
}
const StyledButton = styled.button`
	background: ${getBackground};
	color: ${getColor};
	border-radius: 20px;
	padding: 10px 32px;
	line-height: 24px;
	font-weight: 600;
	border: ${getBorder};
	display: flex;
	align-items: center;

	cursor: pointer;
	:hover {
		background: #7e2a0a;
		color: #fff;
	}
	:active {
		background: #993108;
	}
`
