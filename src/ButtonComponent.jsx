import React from 'react';

// Button with default text 
function ButtonComponent(props) {
    const {defaulttext ='This is default text'} = props;
  return (
    <button onClick={props.functionName}>
      {defaulttext}
    </button>
  );
}

export default ButtonComponent;