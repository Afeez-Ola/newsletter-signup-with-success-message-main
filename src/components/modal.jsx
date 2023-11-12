import React from 'react';
import iconSuccess from '../assets/images/icon-success.svg';

function Modal() {
 return (
  <div class='modal'>
   <div className='main'>
    <img src={iconSuccess} alt='success=icon'></img>
    <div class='modal_text'>
     <h2>Thanks for subscribing!</h2>
     <p>
      A confirmation email has been sent to <strong>{email}</strong>. Please
      open it and click the button inside to confirm your subscription.
     </p>
    </div>
    <button type='Submit'>Dismiss message</button>
   </div>
  </div>
 );
}

export default Modal;
