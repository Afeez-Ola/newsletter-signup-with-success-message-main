import React from "react";
import Form from "./form";

function LeftSection(){
    return (
     <div class='left  m-auto'>
      <h2 class='font-bold text-5xl py-4'>Stay updated!</h2>
      <p class='text-base py-4'>
       Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul>
       <li class='flex my-4'>
        {' '}
        <span class='pr-4'>
         <img src={iconList} alt='icon'></img>
        </span>
        Product discovery and building what matters
       </li>
       <li class='flex my-4'>
        <span class='pr-4'>
         <img src={iconList} alt='icon'></img>
        </span>
        Measuring to ensure updates are a success
       </li>
       <li class='flex my-4'>
        {' '}
        <span class='pr-4'>
         <img src={iconList} alt='icon'></img>
        </span>
        And much more!
       </li>
      </ul>

      <Form></Form>
     </div>
    );
}

export default LeftSection;