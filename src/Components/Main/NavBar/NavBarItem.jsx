import { Button } from '@mui/material'
import React from 'react'
import { navBarButton } from './NavBarStyles/NavBarStyle'

const NavBarItem = ({ item }) => {
	return (
		<Button variant="text" sx={navBarButton}>{item}</Button>
	)
}

export default NavBarItem