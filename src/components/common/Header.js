import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as countryActions from "../../redux/actions/countryActions";
import * as countryTypes from "../../countryTypes";
import PropTypes from "prop-types";

const Header = ({ country, chooseCountry }) => {
  const [choosenCountry, setChoosenCountry] = useState();
  const activeStyle = { color: "#F15B2A" };

  useEffect(() => {
    if (!choosenCountry) {
      setChoosenCountry(countryTypes.GB);
      chooseCountry(countryTypes.GB);
    }
  }, [chooseCountry, choosenCountry]);

  function handleChooseCountry(event) {
    chooseCountry(event.target.value);
  }

  const activeStyleCountry = (countryType) => {
    if (country.shortName === countryType) {
      return { color: "#F15B2A" }; //store's country mathces button in the header -> change style of the button
    }
  };

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
      {countryTypes.types.map((t) => (
        <button
          key={t}
          value={t}
          onClick={handleChooseCountry}
          style={activeStyleCountry(t)}
        >
          {t}
        </button>
      ))}
    </nav>
  );
};

Header.propTypes = {
  country: PropTypes.object.isRequired,
  chooseCountry: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    country: { ...state.country, shortName: state.country.shortName },
  };
}

const mapDispatchToProps = {
  chooseCountry: countryActions.chooseCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
