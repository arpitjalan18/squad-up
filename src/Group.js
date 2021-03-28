import styled from 'styled-components'
import PersonIcon from './personicon.png'
import Sunglasses from './sunglasses.png'
import Rocketship from './Rocketship.png'
import { Link } from 'react-router-dom';
const GroupCon = styled.div`
    background: transparent;
    border-bottom-style: solid;
    border-width: 3px;
    width: 60vw;
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 5px;
`
const GroupConLeft = styled.div`
    display: flex;
    flex-grow: 5;
    flex-direction: column;
`
const TitleText = styled.p`
    font-size: 40px;
    margin: 0px;
    font-family: "Cabin", sans-serif;
    font-weight: 700
`
const BottomTextCon = styled.div`
    display: flex;
    flex-direction: row;
`
const InfoText = styled.div`
    font-size: 20px;
    font-family: "Cabin", sans-serif;
    margin-right: 20px;
    color: grey;
`
const InfoTextM = styled.div`
    font-size: 20px;
    font-family: "Cabin", sans-serif;
    margin-right: 20px;
`
const Join = styled(Link)`
    margin-left: 10px;
    height: 12vh;
    font-size: 25px;
    font-family: "Cabin", sans-serif;
    border-style: solid;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 5px;
    background-color: #a2c3af;
    color: rgba(0,0,0,0.8);
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
function Group(props){
    return(
        <GroupCon>
            <GroupConLeft>
                <TitleText>{props.title}</TitleText>
                <InfoText>This room is hosted by {props.host}</InfoText>
                <BottomTextCon>
                    <Icon src = {PersonIcon}></Icon>
                    <InfoTextM> {props.amount}</InfoTextM>
                    <Icon src = {Sunglasses}></Icon>
                    <InfoTextM> {props.vibes}</InfoTextM>
                    <Icon src = {Rocketship}></Icon>
                    <InfoTextM> {props.goals}</InfoTextM>
                </BottomTextCon>
            </GroupConLeft>
            <Join to = {`/room/${props.id}`}>Join Here</Join>
        </GroupCon>
    );

}
export default Group;