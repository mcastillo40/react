import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

// Wrapper class for the entire Indecision web app
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: null
  };

  handleClearSelecteOption = () => {
    this.setState(() => ({selectedOption: null}));
  }

  // Set state to empty when user requests to delete options
  handleDeletedOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  // Delete a specific option that the user chooses
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  // Pick a random option for the user
  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  // Provide user with info regarding the option
  handleOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already exists";
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat(option)
      }));
    }
  };

  // Get information from local storage
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      // If options is not null then use the information
      if (options) this.setState(() => ({ options }));
    } catch (e) {
      // Do nothing is JSON value is invalid
    }
  }

  // Save options to a local storage when the info is added
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("unMount");
  }

  render() {
    const subTitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDelete={this.handleDeletedOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleOption={this.handleOption} />
        <OptionModal selectedOption={this.state.selectedOption} closeModal={this.handleClearSelecteOption}/>
      </div>
    );
  }
}
