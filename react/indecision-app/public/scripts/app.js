console.log("App working");

// JSX - Javascript XML
//var template = <p>This is JSX from app.js</p>;

//var template = React.createElement(
//    "p",
//    { id: "new" },
//    "This is JSX"
//); 

var appRoot = document.getElementById("app");

ReactDom.render(template, appRoot);
