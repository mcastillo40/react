// Create app object title/subtitle
const app = {
    title: 'Indecision App',
    subtitle: 'Life is Amazing',
    options: []
};

// Item submitted by user will be added to the options array
// Will render the page again after being submitted
// Validate that an item was entered and submitted prior to rendering the page
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderPage();
    }
};

// Removes all options placed in the array by user
const removeAll = () => {
    app.options = [];
 
    renderPage();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);
};


// Section where template will be rendered
const appRoot = document.getElementById('app');

// JSX - Javascript XML 
// The webpage template example
const renderPage = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
    
            {/*Validate that subtitle exists then display if available*/}
            {(app.subtitle) && <p>{app.subtitle}</p>}
    
            {/*If options are available then inform user that options are available if not then inform user*/}
            <p>{(app.options.length > 0) ? 'Here are your options' : 'No options'}</p>

            <button disabled={app.options.length === 0} onClick={makeDecision}>What Should I do?</button>

            <button onClick={removeAll}>Remove all</button> 

            <ol>
                {
                   app.options.map((choice) =>  <li key={choice}>{choice}</li>) 
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button> 
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderPage();