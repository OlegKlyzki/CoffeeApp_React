import { Button } from '@mui/material'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import { NavBarContainer } from '../NavBar/NavBarStyles/NavBarStyle'
import {
	HeaderButtonsContainer,
	headerButtonsStyle,
	HeaderContainer,
	HeaderContextWrapper,
	HeaderDescriptions,
	HeaderSubTitle,
	HeaderTitle
} from './HeaderStyles/HeaderStyle'

const Header = () => {
	return (
		<HeaderContainer>
			<NavBarContainer>
				<NavBar />
			</NavBarContainer>
			<HeaderTitle>coffee</HeaderTitle>
			<HeaderContextWrapper>
				<HeaderSubTitle marginLeft>Tasty Of Doze</HeaderSubTitle>
				<HeaderSubTitle textColorBlack>Cafe</HeaderSubTitle>
				<HeaderDescriptions>more-or-less normal distribution of letters, as opposed to using</HeaderDescriptions>
				<HeaderButtonsContainer>
					<Button variant="contained" sx={headerButtonsStyle}>ABOUT AS</Button>
					<Button variant="contained" sx={headerButtonsStyle}>CALL NOW</Button>
				</HeaderButtonsContainer>
			</HeaderContextWrapper>
		</HeaderContainer>
	)
}

export default Header