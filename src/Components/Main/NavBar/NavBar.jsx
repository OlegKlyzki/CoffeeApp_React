import React from 'react'
import { navBarItems } from '../../../Utils/NavItemUtils'
import NavBarItem from './NavBarItem'
import NavBarLogin from './NavBarLogin'
import { NavBarItemButton, NavBarItemContainer } from './NavBarStyles/NavBarStyle'

const NavBar = () => {
	return (
		<NavBarItemContainer>
			<NavBarItemButton>
				{navBarItems.map(item => <NavBarItem key={item} item={item} />)}
			</NavBarItemButton>
			<NavBarLogin />
		</NavBarItemContainer>
	)
}

export default NavBar   
