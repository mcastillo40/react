import React from "react";

// The Action stateless functional component
// Displays the 'What should I do button' 
// It is only able to be clecked if there are options to choose
const Action = (props) => {
    return (
      <div>
      <button onClick={props.handlePick} 
        disabled={!props.hasOptions}>
        What should I do
      </button>
    </div>
    );
  };

export default Action;