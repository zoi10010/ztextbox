import React from 'react';
const ZTextBox = (props) => {
   return (
      <textbox className={`btn btn--${props.kind} CTA`}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.handleClick}> 
      </textbox>
   )
}
export default ZTextBox;