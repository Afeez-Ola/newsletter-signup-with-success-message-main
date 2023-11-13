import React from 'react';
import Form from './form';
import iconList from '../assets/images/icon-list.svg';

function LeftSection(props) {
 return (
  <div className='left max-[680px]:my-1 md:m-auto'>
   <h2 className='font-bold  text-5xl md:py-4'>Stay updated!</h2>
   <p className='text-base py-4'>
    Join 60,000+ product managers receiving monthly updates on:
   </p>
   <ul>
    <li className='flex my-4'>
     {' '}
     <span className='pr-4'>
      <img src={iconList} alt='icon'></img>
     </span>
     Product discovery and building what matters
    </li>
    <li className='flex my-4'>
     <span className='pr-4'>
      <img className='w-full' src={iconList} alt='icon'></img>
     </span>
     Measuring to ensure updates are a success
    </li>
    <li className='flex my-4'>
     {' '}
     <span className='pr-4'>
      <img src={iconList} alt='icon'></img>
     </span>
     And much more!
    </li>
   </ul>

   <Form
    handleSubmit={props.handleSubmit}
    isValid={props.isValid}
    validateEmail={props.validateEmail}
    openModal={props.openModal}
   ></Form>
  </div>
 );
}

export default LeftSection;
