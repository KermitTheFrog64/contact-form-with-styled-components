import React from "react";
import logo from '../common/logo.svg';
import styled from 'styled-components'

const Burger = styled.div`
width: 35px;
height: 5px;
background-color: rgba(0, 0, 0, 0.6);
margin: 6px 0;
`

const Logo = styled.img`
height: 27px;
`
const Button = styled.button`
width: 60px;
height: 27px;
background: #ED64A6;
border-radius: 6px;
font-weight: 600;
font-size: 12px;
line-height: 15px;
text-align: center;
color: #FFFFFF;
`

const Flex = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const Header = () => {
    return (
        <Flex>
            <div>
                <Burger></Burger>
                <Burger></Burger>
                <Burger></Burger>
            </div>

            <Logo src={logo}></Logo>

            <Button>Sign up</Button>
        </Flex>
    )
}

export default Header;