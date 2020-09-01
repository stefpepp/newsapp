import React from "react";
import { NavLink } from "react-router-dom";
import * as countryTypes from "../../countryTypes/countryTypes";

const Header = () => (
  <nav>
    <NavLink to="/" exact>
      Top News |
    </NavLink>
    <NavLink to="/categories">Categories |</NavLink>
    <NavLink to="/search">Search</NavLink>
    {countryTypes.countryTypes.map((t) => (
      <NavLink to={`/country/` + t} key={t}>
        | {t}
      </NavLink>
    ))}
  </nav>
);

export default Header;
