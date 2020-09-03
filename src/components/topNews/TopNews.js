import React, { useEffect, useState } from "react";
import axios from "axios";
import * as commonUrls from "../../commonUrls";
import Article from "./Article";
import * as countryActions from "../../redux/actions/countryActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TopNews = ({ country, chooseCountry }) => {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    if (!topNews.length > 0) {
      getArticles();
    }
  }, [topNews]);

  const getArticles = async () => {
    const response = await axios.get(commonUrls.TOP_NEWS_URL);
    if (response.statusText === "OK" && response.data.articles.length > 0) {
      const { articles } = response.data;
      setTopNews(articles);
    }
  };

  return (
    <>
      {topNews.map((article) => {
        const key = article.title.slice(0, 20);
        return <Article key={key} article={article} />;
      })}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);
