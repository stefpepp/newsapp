import React, { useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import Headline from "../topNews/Headline";
import Icon from "react-fa";
import "@brainhubeu/react-carousel/lib/style.css";
import "@brainhubeu/react-carousel/lib/style.css";
import style from "../../style.module.scss";

const CategoryRow = ({ categories, category }) => {
  const [toggle, setToggle] = useState(true);

  const toggleView = () => {
    console.log("clicked");
    setToggle(!toggle);
  };

  return (
    <>
      <div className={style.category_title}>
        {category}{" "}
        <Icon
          key={`${category}-adjust`}
          className="icon-example"
          name={toggle ? `angle-up` : `angle-down`}
          onClick={toggleView}
        />
      </div>
      <div key={`${category}-container`} className={style.category_container}>
        {toggle ? (
          <Carousel
            key={category}
            slidesPerPage={4}
            arrowLeft={<Icon className="icon-example" name="arrow-left" />}
            arrowRight={<Icon className="icon-example" name="arrow-right" />}
            addArrowClickHandler
          >
            {categories[category].map((article) => {
              const key = article.url;
              return <Headline key={key} article={article} />;
            })}
          </Carousel>
        ) : null}
      </div>
    </>
  );
};
export default CategoryRow;
