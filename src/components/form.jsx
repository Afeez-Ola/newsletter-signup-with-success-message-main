import React from 'react';

function Form(props) {
 return (
  <form
   onSubmit={props.handleSubmit}
   className={`mail_section ${props.isValid ? '' : 'formInvalid'}`}
  >
   <label className='text-sm font-bold'>Email address</label>
   <input
    onChange={props.validateEmail}
    className={`p-3 rounded-md my-1 ${props.isValid ? 'valid' : 'invalid'} `}
    type='text'
    placeholder='email@company.com'
   ></input>
   <button
    onClick={props.openModal}
    className='p-3 rounded-md my-4'
    type='submit'
   >
    Subscribe to monthly newsletter
   </button>
  </form>
 );
}

export default Form;
