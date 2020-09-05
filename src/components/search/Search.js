import React from "react";
import { useState } from "react";
import style from "../../style.module.scss";
import Headline from "../topNews/Headline";
import { connect } from "react-redux";

const Search = ({ articles, country }) => {
  const [searchText, setSearchText] = useState();
  const [searchedArticles, setSearchedArticles] = useState(articles);

  function handleOnChange(event) {
    event.preventDefault();
    setSearchText(event.target.value);
    setSearchedArticles(
      articles.filter((a) =>
        (a.content + a.title + a.description).includes(searchText)
      )
    );
  }
  return (
    <>
      <div className={style.content_header}>
        <h2>Search top news from {country.shortName} by term:</h2>
        <input type="text" onChange={handleOnChange} value={searchText || ""} />
      </div>
      <div className={style.headlines}>
        {searchedArticles.map((article) => {
          const key = article.title.slice(0, 20);
          return <Headline key={key} article={article} />;
        })}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { articles: state.articles, country: state.country };
}

export default connect(mapStateToProps)(Search);
