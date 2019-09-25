import React from "react";
import { Link } from "react-router-dom";
import { MEALS, CATEGORIES } from "../data/dummy-data";
const CompC = props => {
  const catId = props.match.params.id;
  const selectCategory = CATEGORIES.find(el => el.id === catId);
  const selectedCategoryMeals = MEALS.filter(
    el => el.categoryIds.indexOf(catId) >= 0
  );

  selectedCategoryMeals.map(el => {
    return console.log(el.imageUrl);
  });
  const renderMeals = () => {
    if (selectedCategoryMeals === 0) {
      return <div>Loading...</div>;
    }
    return selectedCategoryMeals.map((el, i) => {
      return (
        <Link className="card" key={i} to={`/detail/${el.id}`}>
          <div className="image">
            <img src={el.imageUrl} alt={el.title} title={el.title} />
          </div>
          <div className="content">
            {/* <div className="header">{el.title}</div> */}
            {/* <div className="description">
                Matthew is an interior designer living in New York.
              </div> */}
            <div>{el.duration}</div>
            <div>{el.affordability}</div>
            <div>{el.complexity}</div>
          </div>
        </Link>
      );
    });
  };
  return (
    <div className="CompC">
      <span className="label">{selectCategory.title}</span>
      <div className="ui link cards">{renderMeals()}</div>
    </div>
  );
};
export default CompC;
