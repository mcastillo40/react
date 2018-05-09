import React from "react";
import Option from "./Option";

// The Options function
// Displays the button to remove all options
// Will call option function to return current options
const Options = props => (
  <div>
    <button onClick={props.handleDelete}>Remove All Options</button>
    {props.options.length === 0 && <p>Please add an option to Start</p>}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;