// Wrapper class for the entire Indecision web app
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeletedOptions = this.handleDeletedOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleOption = this.handleOption.bind(this);

    this.state = {
      options: []
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
    const title = 'Indecision App';
    const subTitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
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

// The header class
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

// The action class
class Action extends React.Component{
  render() {
    return (
  	  <div>
        <button onClick={this.props.handlePick} 
         disabled={!this.props.hasOptions}>
          What should I do
        </button>
      </div>
    );
  }
}

// The Options class displays all of the options
class Options extends React.Component {
	render() {
    return (
      <div>
        <button onClick={this.props.handleDelete}>Remove All Options</button>
   	   {
    	 	this.props.options.map((option) => <Option key={option} optionText={option}/>)
       }
      </div>
    );
  }
}

// The Option class
class Option extends React.Component {
  render() {
    return (
  	  <div>
        {this.props.optionText}
      </div>
    );
  }
}

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));