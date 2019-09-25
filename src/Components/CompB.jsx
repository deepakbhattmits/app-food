import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/dummy-data";
import Card from "../Resuable/Card";
const CompB = () => {
  const renderCategories = () => {
    return CATEGORIES.map((el, i) => {
      return (
        <Link key={i} to={`/shop/${el.id}`}>
          <Card color={el.color} title={el.title} />
        </Link>
      );
    });
  };
  return <div className="CompB">{renderCategories()}</div>;
};
export default CompB;
