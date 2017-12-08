// Wrapper class for the entire Indecision web app
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeletedOptions = this.handleDeletedOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleOption = this.handleOption.bind(this);

    this.state = {
      options: props.options
    }
  }

  handleDeletedOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePickOption() {
    this.setState(() => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      console.log(option);
    });
  }

  handleOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } 
    else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists';
    }
    else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }

  render() {
    const subTitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subTitle={subTitle}/>
        <Action hasOptions={this.state.options.length > 0}
          handlePick={this.handlePickOption}
        />
        <Options options={this.state.options}
        handleDelete={this.handleDeletedOptions}
        />
        <AddOption 
          handleOption={this.handleOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

// The Header function
// Displays the Header and the subTitle
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

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

// The Options function 
// Displays the button to remove all options
// Will call option function to return current options
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDelete}>Remove All Options</button>
      {
        props.options.map((option) => <Option key={option} optionText={option}/>)
      }
    </div>
  );
};

// Option function
// Displays a optionText that is passed
const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  );
};

// The add option class
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleOption = this.handleOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleOption(e) {
		e.preventDefault();
		
		const option = e.target.elements.option.value.trim();
    const error = this.props.handleOption(option);
    
    this.setState(() => {
      return { error };
    });

	}
	
	render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleOption}>
					<input type="text" name="option"/>
					<button>Add Option</button> 
				</form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

