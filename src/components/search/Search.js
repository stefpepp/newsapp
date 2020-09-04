import React from "react";
import { useState } from "react";
import style from "../../style.module.scss";
import Headline from "../topNews/Headline";
import { connect } from "react-redux";

const Search = ({ articles }) => {
  const [searchText, setSearchText] = useState();
  const [searchArticles, setSearchArticles] = useState(articles);

  function handleOnChange(event) {
    event.preventDefault();
    setSearchText(event.target.value);
    setSearchArticles(
      articles.filter((a) =>
        (a.content + a.title + a.description).includes(searchText)
      )
    );
  }
  return (
    <>
      <div className={style.content_header}>
        <h2>Search top news from Great Britain by term:</h2>
        <input type="text" onChange={handleOnChange} value={searchText || ""} />
      </div>
      <div className={style.headlines}>
        {searchArticles.map((article) => {
          const key = article.title.slice(0, 20);
          return <Headline key={key} article={article} />;
        })}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { articles: state.articles };
}

export default connect(mapStateToProps)(Search);
