import React from 'react';
import iconSuccess from '../assets/images/icon-success.svg';

function Modal(props) {
    const closeTheModal = () => {
     props.closeModal(false);
    };
 return (
  <div className='modal  p-6 rounded-xl'>
   <img
    className='py-2 max-[680px]:mt-20 mb-4'
    src={iconSuccess}
    alt='success=icon'
   ></img>
   <div class='modal_text'>
    <h2 className='text-4xl py-2 font-bold'>Thanks for subscribing!</h2>
    <p className='py-2 max-[680px]:pb-24 '>
     A confirmation email has been sent to{' '}
     <strong className='font-bold'>afeez123@123.com{props.email}</strong>.
     Please open it and click the button inside to confirm your subscription.
    </p>
   </div>
   <button
    onClick={closeTheModal}
    className='p-3 rounded-md my-4 py-2 max-[680px]:mt-12'
    type='Submit'
   >
    Dismiss message
   </button>
  </div>
 );
}

export default Modal;
