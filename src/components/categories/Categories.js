import React, { useEffect, useState } from "react";
import style from "../../style.module.scss";
import * as newsCategories from "../../newsCategories";
import * as countryActions from "../../redux/actions/countryActions";
import * as articleActions from "../../redux/actions/articleActions";
import PropTypes from "prop-types";
import axios from "axios";
import "@brainhubeu/react-carousel/lib/style.css";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  urlBuilder,
  TOP_HEADLINES_URL,
  COUNTRY_PARAM,
  CATEGORY_PARAM,
  API_KEY_PARAM,
} from "../../commonUrls";
import { connect } from "react-redux";
import CategoryRow from "./CategoryRow";

const Categories = ({ country }) => {
  const [articlesByCategory, setArticlesByCategory] = useState();
  const [errors, setErrors] = useState();

  useEffect(() => {
    getCategories();
  }, [country]);

  const getCategories = () => {
    const newCategories = newsCategories.all.map(async (c) => {
      const response = await axios
        .get(
          urlBuilder(
            TOP_HEADLINES_URL,
            COUNTRY_PARAM + country.shortName,
            CATEGORY_PARAM + c,
            API_KEY_PARAM
          )
        )
        .catch((error) => {
          setErrors("Error on network");
        });
      if (
        response &&
        response.statusText === "OK" &&
        response.data.articles.length > 0
      ) {
        const { articles } = response.data;
        const categoryArticles = { [c]: articles };
        return categoryArticles;
      } else {
        setErrors("Error on network");
      }
    });
    Promise.all(newCategories).then((values) => {
      let context = {};
      values.forEach((item) => {
        context = { ...context, ...item };
      });
      setArticlesByCategory(context);
    });
  };

  return (
    <>
      {" "}
      {errors ? (
        <h1>{errors}</h1>
      ) : (
        <>
          <div className={style.content_header}>
            <h2>Top 5 news by categories from {country.shortName}:</h2>
          </div>
          <div className={style.categories}>
            {articlesByCategory
              ? newsCategories.all.map((category) => (
                  <>
                    <CategoryRow
                      key={`${category}-row`}
                      categories={articlesByCategory}
                      category={category}
                    />
                  </>
                ))
              : ""}
          </div>
        </>
      )}
    </>
  );
};
Categories.propTypes = {
  country: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    country: { ...state.country, shortName: state.country.shortName },
  };
}

const mapDispatchToProps = {
  chooseCountry: countryActions.chooseCountry,
  storeArticles: articleActions.storeArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
