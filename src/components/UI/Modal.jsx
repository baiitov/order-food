import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
const StyledBackdrop = styled.div`
	width: 100%;
	height: 100vh;
	z-index: 20;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.75);
`
const StyledModalContent = styled.div`
	background-color: white;
	padding: 1rem;
	border-radius: 14px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
	position: fixed;
	top: 20vh;
	z-index: 30;
	width: 40rem;
	left: calc(50% - 20rem);
	animation: slide-down 300ms ease-out forwards;
	@keyframes slide-down {
		from {
			opacity: 0;
			transform: translateY(-3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`
const BackDrop = ({ onClose }) => {
	return <StyledBackdrop onClick={onClose} />
}

const ModalContent = ({ children }) => {
	return <StyledModalContent>{children}</StyledModalContent>
}

const Modal = ({ children, onClose }) => {
	return (
		<>
			{createPortal(
				<BackDrop onClose={onClose} />,
				document.getElementById('backdrop'),
			)}
			{createPortal(
				<ModalContent>{children}</ModalContent>,
				document.getElementById('modal'),
			)}
		</>
	)
}

export default Modal
