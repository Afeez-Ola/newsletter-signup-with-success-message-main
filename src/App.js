import './App.css';
import RightSection from './components/rightSection';
import LeftSection from './components/leftSection';
import Modal from './components/modal';
import { useState } from 'react';

function App() {
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
  if (isValid && email !== '') {
   setModal(true);
  }
  console.log(modal);
 };
 return (
  <main className='flex h-screen items-center justify-center'>
   {!modal && <div className='main grid max-w-4xl md:grid-cols-2  md:justify-items-center max-[680px]:gap-0 md:gap-10 md:p-4 rounded-3xl'>
    <LeftSection
     handleSubmit={handleSubmit}
     isValid={isValid}
     validateEmail={validateEmail}
     openModal={openModal}
    ></LeftSection>
    <RightSection></RightSection>
   </div>}
   {modal && <Modal closeModal={setModal} email={email}></Modal>}
  </main>
 );
}

export default App;
