import './App.css';
import RightSection from './components/rightSection';
import LeftSection from './components/leftSection';
import { useState } from 'react';

function App() {
 const [email, setEmail] = useState('');
 const [isValid, setIsValid] = useState(false);

 const validateEmail = (e) => {
  const regexEmailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  e.preventDefault();
  const valid = regexEmailValidator.test(e.target.value);
  setIsValid(valid);
  setEmail(e.target.value);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email);
 };

 return (
  <div className='main grid max-w-4xl grid-cols-2 gap-10 p-4 rounded-3xl'>
   <LeftSection
    validateEmail={validateEmail}
    handleSubmit={handleSubmit}
   ></LeftSection>
   <RightSection></RightSection>
  </div>
 );
}

export default App;
