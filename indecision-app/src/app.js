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

// Create user object 
const user = {
    name: 'Matt C',
    age: '19',
    location: 'Orange County'
};

// Validate that the user has a location
// If no location than <p> will not be visible
function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

const template2 = (
    <div>
        {/*Ternary example to validate if user has a name*/}
        <h1>{user.name ? user.name : 'Anonymous'}</h1> 

        {/*Logical Operator to validate that the user is 18 or over
            Will display age if 18 or over
            Will not display age if a user is not given an age
        */}
        {(user.age >= 18) &&  <p>Age: {user.age}</p>}

        {/*Function Call for location*/}
        {getLocation(user.location)} 
    </div>
);

// Section where template will be rendered
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
