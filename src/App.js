import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import TopNews from "./components/topNews/TopNews";
import Categories from "./components/categories/Categories";
import Search from "./components/search/Search";
import Header from "./components/common/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={TopNews} />
      <Route path="/categories" component={Categories} />
      <Route path="/search" component={Search} />
    </div>
  );
};
export default App;
