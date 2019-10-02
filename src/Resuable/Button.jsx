import React from 'react';

const Button = props => {
    return <button id={props.id} type={ props.type } className={ props.className } onClick={ props.onClick } > { props.children.toUpperCase()} </button>
}
export default Button;