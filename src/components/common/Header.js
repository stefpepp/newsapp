import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import style from "../../style.module.scss";
import * as countryActions from "../../redux/actions/countryActions";
import * as countryTypes from "../../countryTypes";
import PropTypes from "prop-types";
import HeaderItem from "./HeaderItem";

const Header = ({ country, chooseCountry }) => {
  const [choosenCountry, setChoosenCountry] = useState();
  const activeStyle = { textDecoration: "underline" };

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
      return { color: "black", background: "#e8e8e8", outline: "none" }; //store's country mathces button in the header -> change style of the button
    }
  };

  return (
    <div className={style.header}>
      <nav>
        <div className={style.header_first_section}>
          <HeaderItem
            path="/"
            className={style.header_item}
            activeStyle={activeStyle}
            name="Top News"
          />
          <HeaderItem
            path="/categories"
            className={style.header_item}
            activeStyle={activeStyle}
            name="Categories"
          />
          <HeaderItem
            path="/search"
            className={style.header_item}
            activeStyle={activeStyle}
            name="Search"
          />
        </div>
        <div className={style.header_second_section}>
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
        </div>
      </nav>
    </div>
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
