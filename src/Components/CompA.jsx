import React from "react";
const CompA = props => {
  console.log(props.match.params);
    return (
    <div className="CompA">
      <span className="label">Hello </span>
    </div>
  );
};
export default CompA;
