import React, { useState } from 'react';

function Form(props) {
 const [email, setEmail] = useState('');
 const [isValid, setIsValid] = useState(false);
 const [modal, setModal] = useState(false);

 const validateEmail = (e) => {
  const regexEmailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  e.preventDefault();
  const input = e.target.value;
  const valid = regexEmailValidator.test(input);
  console.log(`valid is ${valid}`);
  setIsValid(valid);
  setEmail(e.target.value);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email);
 };

 const openModal = (e) => {
  e.preventDefault();
  if (isValid && email !== '') setModal(true);
  console.log(email);
 };

 return (
  <form
   onSubmit={handleSubmit}
   className={`mail_section ${isValid ? '' : 'formInvalid'}`}
  >
   <label className='text-sm font-bold'>Email address</label>
   <input
    onChange={validateEmail}
    className={`p-3 rounded-md my-1 ${isValid ? 'valid' : 'invalid'} `}
    type='text'
    placeholder='email@company.com'
   ></input>
   <button onClick={openModal} className='p-3 rounded-md my-4' type='submit'>
    Subscribe to monthly newsletter
   </button>
  </form>
 );
}

export default Form;
