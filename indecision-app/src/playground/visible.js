class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        
        // bind function
        this.toggleVisibility = this.toggleVisibility.bind(this);

        // default state object
        this.state = {
          visibility: false
        };
      }

      // Function to toggle visibility on and off 
      toggleVisibility(){
        this.setState((prevState) => {

            if (prevState.visibility == false) {
                return {
                    visibility: true
                };
            }
            else 
                return {
                    visibility: false
                };
          });
      }

      render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Now you can see the details</p>
                    </div>
                )}
            </div>
        );
      }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

// Section where template will be rendered
// const appRoot = document.getElementById('app');

// let displaySentence = ""; // Default statement 
// let display = false;      // False if there is no sentence shown 

// // This function will set text shown to "Some details" and set hideDetail button to visible
// const hideDetails = () => {
//     displaySentence = "Some details";
//     display = true;
//     renderVisibility();
// };

// // This function will set text shown to "" and set showDetail button to visible
// const showDetails = () => {
//     displaySentence = "";
//     display = false;
//     renderVisibility();
// };

// // Function to display template
// const renderVisibility = () => {
//     const visibleBody = (
//         <div>
//         <h1>Visibility Toggle</h1>
//             <button hidden={display} onClick={hideDetails}>Show Details</button>
//             <button hidden={!display} onClick={showDetails}>Hide Details</button>
//             <p>{displaySentence}</p>
//         </div>
//     );

//     ReactDOM.render(visibleBody, appRoot);
// }

// renderVisibility();