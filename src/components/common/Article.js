import React from "react";
import style from "../../style.module.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Article = ({ location, articles }) => {
  const article = articles.filter((a) => a.url === location.aboutProps)[0];
  return (
    <div className={style.article}>
      <div className={style.article_title}>
        {article.title ? article.title : ""}
      </div>
      <div className={style.article_picture}>
        {article.urlToImage ? (
          <img src={article.urlToImage} alt={article.title} />
        ) : (
          ""
        )}
      </div>
      <div className={style.article_content}>
        {article.content ? article.content : ""}
      </div>
      <div className={style.article_back}>
        <NavLink to="/" exact>
          Back...
        </NavLink>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { articles: state.articles };
}

Article.propTypes = {
  articles: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Article);
