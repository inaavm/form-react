import React from 'react';
import Button from './Button';

function Talker() {
  
  function A() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button functionname={A}/>;
}

export default Talker;

