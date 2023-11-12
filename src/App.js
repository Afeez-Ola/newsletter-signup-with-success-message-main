import './App.css';
import RightSection from './components/rightSection';
import LeftSection from './components/leftSection';
import { useState } from 'react';

function App() {
 return (
  <div className='main grid max-w-4xl lg:grid-cols-2  justify-items-center gap-10 p-4 rounded-3xl'>
   <LeftSection></LeftSection>
   <RightSection></RightSection>
  </div>
 );
}

export default App;
