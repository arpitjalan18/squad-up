import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sunglasses from './sunglasses2.png'
import './App.css';
const Back = styled.div`
    background: #c4f1be;
    width: 100vw;
    height: 12vh;
    display: flexbox;
    align-items: center;
    justify-content: center;
`
const Logo = styled.div`
    margin-left: 30px;
    margin-right: 300px;
    display: flex;
    flex-direction: row;
`
const SquadText = styled.div`
    font-size: 60px;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
`
const StyledLink = styled(Link)`
    font-size: 30px;
    font-family: 'Cabin', sans-serif;
    background: #a2c3a4;    
    border-style: solid;
    border-color: #345955;
    border-radius: 3px;
    margin-left: 30px;
    margin-right: 30px;
    padding: 8px;
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const Icon = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 10px;
`
function Header(props){
    return(
        <Back>
            <Logo>
                <Icon src = {Sunglasses}></Icon>
                <SquadText>Squad-Up</SquadText>
            </Logo>
            
        
             {props.create && 
               <StyledLink to = "/create">
                    Create Room
                </StyledLink>
            }
            {props.join &&
            <StyledLink to = "/list">
                Join Room
            </StyledLink>
            }
            {props.home &&
            <StyledLink to = "/list">
                Home
            </StyledLink>
            }
        </Back>
    );
}
export default Header;