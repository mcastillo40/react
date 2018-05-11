import React from "react";
import Option from "./Option";

// The Options function
// Displays the button to remove all options
// Will call option function to return current options
const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={props.handleDelete}>
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Please Add An Option To Start</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
