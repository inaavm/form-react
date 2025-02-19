import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false); 
  //Initial state for authorized is true, which means you're rendering the 
  //contactInfo component even before the user enters the password.

  function handleSubmit(e) {
    e.preventDefault();
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  const login = (
    <form action = "#" onSubmit = {handleSubmit}>
      <input
      type="password"
      placeholder="Password"
      /> 
    </form>)


const contactInfo = (
   <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
);
  return (
      <div id="authorization">
        {authorized ? <h1>Contact</h1> : <h1>Enter the Password</h1>}
        {authorized ? contactInfo : login}
    </div>
 
  );
}

export default Contact;