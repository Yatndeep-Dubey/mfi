import { Route, Routes } from 'react-router-dom';
import {
  Login, Signup_personal_details,Signup_company_details
} from './pages'
import Dashboard from './pages/Dashboard';
import Subscription from './pages/Subscription';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route> 
        <Route path='/signup_personal_details' element={<Signup_personal_details/>}></Route>
        <Route path='/signup_company_details' element={<Signup_company_details/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/subscription' element={<Subscription/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
