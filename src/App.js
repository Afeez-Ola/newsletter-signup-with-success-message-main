import './App.css';
import iconList from './assets/images/icon-list.svg';
import signUpIllustration from './assets/images/illustration-sign-up-desktop.svg';
import LeftSection from './components/leftSection';

function App() {
 return (
  <div class='main grid max-w-4xl grid-cols-2 gap-10 p-4 rounded-3xl'>
   <LeftSection></LeftSection>
   <div class='right'>
    <img src={signUpIllustration} alt=''></img>
   </div>
  </div>
 );
}

export default App;
