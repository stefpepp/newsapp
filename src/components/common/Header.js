import React from "react";
import { NavLink } from "react-router-dom";
import * as countryTypes from "../../countryTypes/countryTypes";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Top News |
      </NavLink>
      <NavLink to="/categories" activeStyle={activeStyle}>
        Categories |
      </NavLink>
      <NavLink to="/search" activeStyle={activeStyle}>
        Search
      </NavLink>
      {countryTypes.countryTypes.map((t) => (
        <NavLink to={`/country/` + t} key={t} activeStyle={activeStyle}>
          | {t}
        </NavLink>
      ))}
    </nav>
  );
};

export default Header;
