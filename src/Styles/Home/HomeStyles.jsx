import styled from 'styled-components';
import coffee_home_main_bg from '../../Images/coffee-beans-bg.jpg';
import white_bg from '../../Images/white-bg.png'
import coffee_cup from '../../Images/coffee-cup.png'
export const HomeContainer = styled.div`
	position: relative;
	background: url(${coffee_home_main_bg}) center center / cover no-repeat;
	background-color: #fb9c89;
    height: 972px;
	margin: 5px;
	box-shadow: rgba(129, 119, 119, 0.5) 5px -5px 5px,
	rgba(129, 119, 119, 0.5) 5px 5px 5px, 
	rgba(129, 119, 119, 0.5) -5px -5px 5px,
	rgba(129, 119, 119, 0.5) -5px 5px 5px;
`
export const HomeMain = styled.div`
	background-color: rgba(251,156,137, 0.8);
	width: 100%;
	height: 100%;
`
export const HomeWhite = styled.div`
	background: url(${white_bg});
	width: 67.1%;
	height: 100%;
	margin-left: 624px;
`
export const CoffeeCup = styled.div`
	position: absolute;
	background: url(${coffee_cup});
	width: 24%;
    height: 42%;
    left: 374px;
    top: 242px;
	border: none;
`
export const CoffeeRight = styled.div`

`