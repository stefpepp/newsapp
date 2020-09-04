import React, { useEffect, useState } from "react";
import style from "../../style.module.scss";
import axios from "axios";
import * as commonUrls from "../../commonUrls";
import Headline from "./Headline";
import * as countryActions from "../../redux/actions/countryActions";
import * as articleActions from "../../redux/actions/articleActions";
import * as countryTypes from "../../countryTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TopNews = ({ country, storeArticles }) => {
  const [topNews, setTopNews] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    const newsLength = topNews.length;
    if (!newsLength || !newsLength > 0) {
      getArticles();
    }
  }, [country, errors]);

  const getArticles = async () => {
    console.log(country.shortName);
    const url =
      country.shortName === countryTypes.GB
        ? commonUrls.TOP_NEWS_GB_URL
        : commonUrls.TOP_NEWS_US_URL;
    console.log(url);
    const response = await axios.get(url).catch((error) => {
      setErrors("Error on network");
    });
    if (
      response &&
      response.statusText === "OK" &&
      response.data.articles.length > 0
    ) {
      const { articles } = response.data;
      setTopNews(articles);
      storeArticles(articles);
    }
  };

  return (
    <>
      {errors ? (
        <h1>{errors}</h1>
      ) : (
        <>
          <div className={style.content_description}>
            <h2>Top news from Great Britain:</h2>
          </div>
          <div className={style.headlines}>
            {topNews.map((article) => {
              const key = article.title.slice(0, 20);
              return <Headline key={key} article={article} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

TopNews.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);
