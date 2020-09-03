import React from "react";

const Article = ({ article }) => {
  return (
    <div key={article.publishedAt}>
      <p>{article.title}</p>
      <div>{article.content}</div>
    </div>
  );
};

export default Article;
