import styled from 'styled-components';

export const HeaderContainer = styled.div`
	position: absolute;
    width: 562px;
	padding-top: 263px;
	margin-left: 342px;
`

export const HeaderContextWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export const HeaderTitle = styled.h1`
    color: #4a4949;
    font-size: 177px;
    text-shadow: 2px 13px 2px rgb(239, 239, 239);
`

export const HeaderSubTitle = styled.h3`
	color: ${props => props.textColorBlack ? "black" : "#e38773;"};
	margin-left: ${props => props.marginLeft ? "15px" : "0px"};
    font-size: 40px;
`

export const HeaderDescriptions = styled.p`
	color: #4a4949;
	font-size: 17px;
	margin-left: 15px;
	padding-top: 10px;
`

export const HeaderButtonsContainer = styled.div`
	padding-top: 60px;
	padding-left: 12px;
`

export const headerButtonsStyle = {
    width: '254px',
    height: '80px',
    borderRadius: '10px',
    fontSize: '18px',
    color: '#fefefd',
    backgroundColor: '#d48272',
    marginRight: '17px',
    '&:hover': {
        backgroundColor: '#4a4949'
    },
    '&:focus': {
        backgroundColor: '#4a4949'
    }
}