// Section where template will be rendered
const appRoot = document.getElementById('app');

let displaySentence = ""; // Default statement 
let display = false;      // False if there is no sentence shown 

// This function will set text shown to "Some details" and set hideDetail button to visible
const hideDetails = () => {
    displaySentence = "Some details";
    display = true;
    renderVisibility();
};

// This function will set text shown to "" and set showDetail button to visible
const showDetails = () => {
    displaySentence = "";
    display = false;
    renderVisibility();
};

// Function to display template
const renderVisibility = () => {
    const visibleBody = (
        <div>
        <h1>Visibility Toggle</h1>
            <button hidden={display} onClick={hideDetails}>Show Details</button>
            <button hidden={!display} onClick={showDetails}>Hide Details</button>
            <p>{displaySentence}</p>
        </div>
    );

    ReactDOM.render(visibleBody, appRoot);
}

renderVisibility();