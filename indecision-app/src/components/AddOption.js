import React from "react";

// Form to add option
export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleOption}>
          <input type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
