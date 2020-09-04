import React from "react";
import style from "./style.module.scss";
import { Route } from "react-router-dom";
import TopNews from "./components/topNews/TopNews";
import Categories from "./components/categories/Categories";
import Search from "./components/search/Search";
import Header from "./components/common/Header";
import Article from "./components/common/Article";

const App = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.main_content}>
        <Route exact path="/" component={TopNews} />
        <Route path="/categories" component={Categories} />
        <Route path="/search" component={Search} />
        <Route path="/article" component={Article} />
      </div>
    </div>
  );
};
export default App;
