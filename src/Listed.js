import './App.css';
import FilterBar from './FilterBar';
import Group from './Group.js'
import Header from './Header.js'
import React, { useState, useEffect } from 'react';
import {getStore} from './store.js'
function Listed(props) {
  let data = getStore();
  const [ranges, setRanges] = useState([1,10]);
  const [vibeFilt, setVibeFilt] = useState("All");
  data = data.filter(group => group.amount <= ranges[1] && group.amount >= ranges[0]);
  if (vibeFilt != "All"){
    data = data.filter(group => group.vibes == vibeFilt);
  }
  const onSliderChange = (data1, data2) => {
    if(!data2){
      setVibeFilt(data1.target.value);
    }
    else{
      setRanges(data1);
    }
  };
  return (
    <div className="App">
      <Header home create></Header>
      <FilterBar whatIsSlider = {onSliderChange}></FilterBar>
      {data.map(group => (
        <Group key = {group.id} vibes = {group.vibes} amount = {group.amount} title = {group.title} host = {group.host} goals = {group.goals} id = {group.id}></Group>
      ))}
    </div>
  );
}
export default Listed;
