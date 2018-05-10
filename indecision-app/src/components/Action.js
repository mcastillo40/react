import React from "react";

// The Action stateless functional component
// Displays the 'What should I do button'
// It is only able to be clecked if there are options to choose
const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What Should I Do
    </button>
  </div>
);

export default Action;
