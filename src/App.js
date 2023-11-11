import './App.css';
import iconList from './assets/images/icon-list.svg';\
import signUpIllustration from "./assets/images/illustration-sign-up-desktop.svg";

function App() {
 return (
  <div class='main grid max-w-4xl grid-cols-2 gap-10 p-4 rounded-3xl'>
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
   </div>
   <div class='right'>
    <img src='/assets/images/illustration-sign-up-desktop.svg' alt=''></img>
   </div>
  </div>
 );
}

export default App;
