'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        // bind function
        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.toggleVisibility = _this.toggleVisibility.bind(_this);

        // default state object
        _this.state = {
            visibility: false
        };
        return _this;
    }

    // Function to toggle visibility on and off 


    _createClass(VisibilityToggle, [{
        key: 'toggleVisibility',
        value: function toggleVisibility() {
            this.setState(function (prevState) {

                if (prevState.visibility == false) {
                    return {
                        visibility: true
                    };
                } else return {
                    visibility: false
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggleVisibility },
                    this.state.visibility ? 'Hide Details' : 'Show Details'
                ),
                this.state.visibility && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Now you can see the details'
                    )
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

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
