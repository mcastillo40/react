class Counter extends React.Component {
  constructor(props){
    super(props);
    
    // bind functions
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    
    // default state object
    this.state = {
      count: 0
    };
  }

  // Get count from local storage
  componentDidMount() {

    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    // Validate that count is a number
    if (!isNaN(count))
      this.setState(() => ({ count }));

  }

  // Update local storage with updated count
  componentDidUpdate(prevProps, prevState) {

    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    }); 
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

/* Default props
Counter.defaultProps = {
  count: 0 
};
*/

ReactDOM.render(<Counter />, document.getElementById('app'));

