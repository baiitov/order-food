import React, { memo } from 'react'
import StyledImg from '../../assets/img/samary-backg.jpg'
import styled from 'styled-components'
import SummaryCard from './SummaryCard'

const Summary = () => {
	return (
		<Container>
			<BackgroundImg src={StyledImg} alt='' />
			<SummaryCard />
		</Container>
	)
}

export default memo(Summary)
const Container = styled.div`
	height: 527px;
`
const BackgroundImg = styled.img`
	width: 100%;
	height: 432px;
`
