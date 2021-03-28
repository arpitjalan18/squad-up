import './App.css';
import Header from './Header.js'
import {getStore} from './store.js'
import styled from 'styled-components'
import Sunglasses from './sunglasses2.png'
import {addOne, removeOne} from './store.js'
const TitleText = styled.p`
    font-size: 40px;
    margin: 0px;
    font-family: "Cabin", sans-serif;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
`

const InfoTextM = styled.div`
    font-size: 40px;
    font-family: "Cabin", sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
`
const ZoomL = styled.a`
  font-size: 30px;
  font-family: "Cabin", sans-serif;
  margin-right: 20px;
  font-weight: 400;
  color: black;
`
const Icon = styled.img`
    width: 200px;
    height: 200px;
    margin-top: 50px;
`
function Room(props) {
  const data = getStore();
  let group =  data.find(element=> element.id == props.match.params.id)
  let updateStore = () => {
    addOne(group.id, group.amount+1)
  }
  return (
    <div className="App">
      <Header home></Header>
      <TitleText>Welcome to {group.host}'s study room, {group.title}!</TitleText>
      <ZoomL href = {group.zoomlink}  onClick = {updateStore} target="_blank">Here's the zoom link!</ZoomL>
      <InfoTextM>Hope the vibes are great!</InfoTextM>
      <Icon src = {Sunglasses}></Icon>
    </div>
  );
}
export default Room;
