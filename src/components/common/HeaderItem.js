import React from "react";
import { NavLink } from "react-router-dom";

const HeaderItem = ({ path, className, activeStyle, name }) => {
  return (
    <div className={className}>
      <NavLink to={path} exact activeStyle={activeStyle}>
        {name}
      </NavLink>
    </div>
  );
};

export default HeaderItem;
