import React from 'react';

function Form(props) {
 return (
  <form className='mail_section'>
   <label className='text-sm font-bold'>Email address</label>
   <input 
    onChange={props.validateEmail}
    required
    className={`p-3 rounded-md my-1 ${props.formIsValid}`}
    type='text'
    placeholder='email@company.com'
   ></input>
   <button
    onSubmit={props.handleSubmit}
    className='p-3 rounded-md my-4'
    type='submit'
   >
    Subscribe to monthly newsletter
   </button>
  </form>
 );
}

export default Form;
