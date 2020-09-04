import React from "react";
import style from "../../style.module.scss";
import { NavLink } from "react-router-dom";

const Headline = ({ article }) => {
  return (
    <div className={style.thumbnail}>
      <div className={style.thumbnail_title}>{article.title}</div>
      <div className={style.thumbnail_picture}>
        <img src={article.urlToImage} />
      </div>
      <div className={style.thumbnail_description}>{article.description}</div>
      <div className={style.thumbnail_more}>
        <NavLink exact to={{ pathname: "/article", aboutProps: article.url }}>
          More...
        </NavLink>
      </div>
    </div>
  );
};

export default Headline;
