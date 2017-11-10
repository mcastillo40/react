// Wrapper class for the entire Indecision web app
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subTitle = 'Put your life in the hands of a computer';
    const options = ['Thing 1', 'Thing 2', 'Thing 4'];

    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
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
  handlePick() {
    alert('handlePick');
  }

  render() {
    return (
  	  <div>
        <button onClick={this.handlePick}>What should I do</button>
      </div>
    );
  }
}

// The Options class displays all of the options
class Options extends React.Component {
	constructor(props){
		super(props);
		this.removeAll = this.removeAll.bind(this);
	}

	removeAll() {
		alert('removeAll');
		console.log(this.props.options)
  }
	
	render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove All Options</button>
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
	handleOption(e) {
		e.preventDefault();
		
		const option = e.target.elements.option.value.trim();
		
		if(option) {
			alert(option);			
					//app.options.push(option);
						//e.target.elements.option.value = "";
						//renderPage();
		}
	}
	
	render() {
    return (
      <div>
				<form onSubmit={this.handleOption}>
					<input type="text" name="option"/>
					<button>Add Option</button> 
				</form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));