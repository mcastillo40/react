console.log("App working");

// Create app object title/subtitle
var app = {
    title: 'Indecision App',
    subtitle: 'Some Info'
};

// JSX - Javascript XML
var template = (
    <div>
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 1</li>
        </ol>
    </div>
);

var user = {
    name: 'Albert',
    age: '30',
    location: 'Oregon'
};

var userName = 'Matt';
var age = 20;
var userLocation = 'Orange County';

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {age}</p>
        <p>Location: {userLocation}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
