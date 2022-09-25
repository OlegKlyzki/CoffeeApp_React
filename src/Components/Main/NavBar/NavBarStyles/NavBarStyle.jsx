import styled from "styled-components";

export const NavBarContainer = styled.div`
    position: absolute;
    top: 60px;
    left: -122px;
    display: flex;
    align-items: center;
`

export const NavBarItemContainer = styled.div`
    display: flex;
    align-items: center;
`

export const NavBarItemButton = styled.div`
    display: flex;  
`

export const NavBarLoginContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 166px;
`

export const navBarButton = {
    color: ' #a9a8a8',
    fontSize: '18px',
    padding: '0 40px 0 0',
    '&:hover, &:focus': {
        color: '#4c4c4c'
    },
    '&:last-child': {
        padding: '0',
        width: '115px'
    }
}

export const personIconStyle = {
    marginRight: '7px',
    paddingBottom: '4px',
    color: '#d98473',
    fontSize: '23px',
    cursor: 'pointer',
    '&:hover': {
        color: '#4c4c4c'
    },
    '&:last-child': {
        padding: '2px 0',
        margin: '0'
    }
}