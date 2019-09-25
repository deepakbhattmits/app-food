import React, { useState } from "react";
import { connect } from "react-redux";
import { MEALS } from "../data/dummy-data";
import { markFavorite, unmarkFavorite } from "../Actions";
const CompD = props => {
  // console.log(props);
  const [status, setStatus] = useState(false);
  const mealId = props.match.params.id;
  const meal = MEALS.find(el => el.id === mealId);
  // console.log("Details : ", meal.ingredients);
  const renderIngedrients = () => {
    if (meal.ingredients.length === 0) {
      return <div>Loading...</div>;
    }
    return meal.ingredients.map((el, i) => {
      return (
        <div className="item" key={i}>
          <div className="content">{el}</div>
        </div>
      );
    });
  };
  const renderSteps = () => {
    if (meal.steps.length === 0) {
      return <div>Loading...</div>;
    }
    return meal.steps.map((el, i) => {
      return (
        <div className="item" key={i}>
          <div className="content">{el}</div>
        </div>
      );
    });
  };
  const handleClick = e => {
    setStatus(!status);
    props.markFavorite(e.target.id);
  };
  // const unmarkFavourite = e => {
  //   setStatus(!status);
  //   props.unmarkFavourite(e.target.id);
  // };

  return (
    <div className="CompD">
      <h1 className="ui center aligned header">
        {meal.title}
        <i
          id={meal.id}
          className={`pointer icon star ${status ? "green" : "outline black"}`}
          areaHidden="true"
          title={` ${status ? "Unmark Favourite" : "Mark Favourite"}`}
          onClick={handleClick}
        />
      </h1>
      <div className="doubling stackable three column ui grid container">
        <div className="column">
          <div className="image">
            <img src={meal.imageUrl} alt={meal.title} />
          </div>
        </div>
        <div className="column">
          <div>
            <div>
              <h3 class="ui header">Ingredients</h3>
            </div>
            <div className="ui list">{renderIngedrients()}</div>
          </div>
        </div>
        <div className="column">
          <div>
            <div>
              <h3 className="ui header">Steps</h3>
            </div>
            <div className="ui list">{renderSteps()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  markFavorite: data => dispatch(markFavorite(data)),
  unmarkFavorite: data => dispatch(unmarkFavorite(data))
});
const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompD);
