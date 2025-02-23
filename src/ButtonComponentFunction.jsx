import React from 'react';
import ButtonComponent from './ButtonComponent';

function ButtonComponentFunction() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return (
    <>
  <ButtonComponent functionName={talk} defaulttext = "alternative to default"/>
  <ButtonComponent functionName={talk} />
  </>
  )
  ;
}

export default ButtonComponentFunction;
