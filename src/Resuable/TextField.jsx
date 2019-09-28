import React from "react";

const TextField = props => {
   // console.log(props)
   const handleChange = ( e ) => {
    const { name, value } = e.target; 
    const data= { name, value}
    props.handleChange( data )
   }
  return (
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={ handleChange }
        value={ props.value }
      />
  );
};
export default TextField;
