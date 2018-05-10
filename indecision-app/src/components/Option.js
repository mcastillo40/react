import React from "react";

// Option function
// Displays a optionText that is passed
const Option = props => (
  <div>
    {props.optionText}
    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
