import React, { useEffect, useState } from "react";
import axios from "axios";
import * as commonUrls from "../../commonUrls";
import Article from "./Article";

const TopNews = () => {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    console.log("USE EFFECT!!!!");
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
        return <Article key={article.publishedAt} article={article} />;
      })}
    </>
  );
};

export default TopNews;
