console.log("App working");

// Create app object title/subtitle
const app = {
    title: 'Indecision App',
    subtitle: 'Life is Amazing',
    options: ['One', 'Two']
};

// JSX - Javascript XML 
// The webpage template example
const template = (
    <div>
        <h1>{app.title}</h1> 

        {/*Validate that subtitle exists then display if available*/}
        {(app.subtitle) && <p>{app.subtitle}</p>}

        {/*If options are available then inform user that options are available if not then inform user*/}
        <p>{(app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
        
        <ol>
            <li>Item 2</li>
            <li>Item 1</li>
        </ol>
    </div>

);

// Section where template will be rendered
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);