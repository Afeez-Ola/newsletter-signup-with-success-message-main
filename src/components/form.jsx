import React from 'react';

function Form() {
 return (
  <form class='mail_section'>
   <label class='text-sm font-bold'>Email address</label>
   <input
    required
    class='p-3 rounded-md my-1'
    type='text'
    placeholder='email@company.com'
   ></input>
   <button class='p-3 rounded-md my-4' type='submit'>
    Subscribe to monthly newsletter
   </button>
  </form>
 );
}

export default Form;
