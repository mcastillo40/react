let count = 0;

const addOne = () => {
    count++;
    renderPage();
    console.log("add", count);
};

const minusOne = () => {
    count--;
    renderPage();Reset
    console.log("minus");
};

const reset = () => {
    count = 0;
    renderPage();
    console.log("reset");
};


// Section where template will be rendered
const appRoot = document.getElementById('app');

const renderPage = () => {
    const template2 = (
        <div>
           <h1>Count: {count}</h1>
           <button onClick={addOne}>+1</button>
           <button onClick={minusOne}>-1</button>
           <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(template2, appRoot);

};

renderPage();