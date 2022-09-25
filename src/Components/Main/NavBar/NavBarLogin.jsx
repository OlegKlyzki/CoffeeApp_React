import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { navBarButton, NavBarLoginContainer, personIconStyle } from './NavBarStyles/NavBarStyle';
import { Button } from '@mui/material';
const NavBarLogin = () => {
	return (
		<NavBarLoginContainer>
			<PersonIcon sx={personIconStyle}></PersonIcon>
			<Button variant="text" sx={navBarButton}>login</Button>
			<SearchIcon sx={personIconStyle}></SearchIcon>
		</NavBarLoginContainer>
	)
}

export default NavBarLogin