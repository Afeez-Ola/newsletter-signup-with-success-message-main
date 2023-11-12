import React from 'react';
import signUpIllustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import signUpIllustrationMobile from '../assets/images/illustration-sign-up-mobile.svg';

function RightSection() {
 return (
  <picture className='right w-full'>
   <source
    media='(min-width: 900px)'
    srcset={signUpIllustrationDesktop}
   ></source>
   <source
    media='(min-width: 480px)'
    srcset={signUpIllustrationMobile}
   ></source>
   <img
    className='right w-full'
    src={signUpIllustrationMobile}
    alt='IfItDoesntMatchAnyMedia'
   ></img>
  </picture>
 );
}

export default RightSection;
