import styled from 'styled-components'
import RangeSlider from './RangeSlider'
import {getStore} from "./store.js"
const InfoText = styled.div`
    font-size: 25px;
    font-family: "Cabin", sans-serif;
    margin-top: 20px;
`
const Selecter = styled.select`
    width: 200px;
    height: 50px;
    margin-top: 20px;
    font-size: 20px;
    font-family: "Cabin", sans-serif;
`
const Val = styled.option`
    font-size: 20px;
    font-family: "Cabin", sans-serif;
`
function FilterBar(props){
    let addVibes = ['All','Socializing', 'Focused', 'Chill'];
    let theVibes = getStore().map(group => group.vibes);
    let idN = 1;
    theVibes = [...new Set([...addVibes, ...theVibes])];
    return(
        <form className="App">
            <InfoText>What vibes are you looking for?</InfoText>
            <Selecter name = "vibes" id = "vibes" onChange = {props.whatIsSlider}>
                {theVibes.map(vibe => (
                    <Val key = {idN++}>{vibe}</Val>
                ))}
            </Selecter>       
            <InfoText>Number of People</InfoText> 
            <RangeSlider change ={props.whatIsSlider}></RangeSlider>
        </form>
    );

}
export default FilterBar;