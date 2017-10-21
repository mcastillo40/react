console.log("App working");

// JSX - Javascript XML
var template = (
    <div>
        <h1>Matt C</h1> 
        <p>some info</p>
    </div>
);

var template2 = (
    <div>
        <h1>Matthew C</h1>
        <p>Age: 20</p>
        <p>Location: Orange County</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
