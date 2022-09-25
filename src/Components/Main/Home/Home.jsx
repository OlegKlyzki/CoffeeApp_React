import { Divider } from '@mui/material'
import React from 'react'
import {
	CoffeeCup,
	CoffeeRight,
	dividerStyle,
	HomeContainer,
	HomeDivider,
	HomeLogo,
	HomeLogoContainer,
	HomeMain,
	HomeWhite
} from './HomeStyles/HomeStyles'
import Header from '../Header/Header'

const Home = () => {
	return (
		<HomeContainer>
			<HomeMain>
				<HomeLogoContainer>
					<HomeLogo>Doze</HomeLogo>
					<HomeLogo textColorBlack>Cafe</HomeLogo>
				</HomeLogoContainer>
				<HomeWhite>
					<CoffeeCup></CoffeeCup>
					<CoffeeRight></CoffeeRight>
					<Header />
					<HomeDivider>
						<Divider textAlign="center" sx={dividerStyle}>02</Divider>
					</HomeDivider>
				</HomeWhite>
			</HomeMain>
		</HomeContainer>
	)
}

export default Home