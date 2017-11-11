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

ReactDOM.render(<Counter/>, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count++;
//     renderPage();
//     console.log("add", count);
// };

// const minusOne = () => {
//     count--;
//     renderPage();Reset
//     console.log("minus");
// };

// const reset = () => {
//     count = 0;
//     renderPage();
//     console.log("reset");
// };


// // Section where template will be rendered
// const appRoot = document.getElementById('app');

// const renderPage = () => {
//     const template2 = (
//         <div>
//            <h1>Count: {count}</h1>
//            <button onClick={addOne}>+1</button>
//            <button onClick={minusOne}>-1</button>
//            <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(template2, appRoot);

// };

// renderPage();