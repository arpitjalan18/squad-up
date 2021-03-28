import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([1, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.change(newValue, "slider");
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        step = {1}
        marks
        min = {1}
        max = {10}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}