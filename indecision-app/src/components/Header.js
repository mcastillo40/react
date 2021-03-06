import React from "react";

// The Header function
// Displays the Header and the subTitle
const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: "Indecision App"
};

export default Header;
