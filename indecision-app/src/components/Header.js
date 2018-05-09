import React from "react";

// The Header function
// Displays the Header and the subTitle
const Header = props => (
  <div>
    <h1>{props.title}</h1>
    {props.subTitle && <h2>{props.subTitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: "Indecision App"
};

export default Header;