import { Route, Routes } from 'react-router-dom';
import {
  Login, Signup_personal_details,Signup_company_details
} from './pages'
import Dashboard from './pages/Dashboard';
import Subscription from './pages/Subscription';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Users from './pages/Users';
import Sidebar from './Components/Sidebar';
import CompanyInfo from './pages/adminPage/CompanyInfo';
import Iserv from './pages/adminPage/Iserv';
import CompanyDetails from './pages/adminPage/companyDet';
import Leads from './pages/adminPage/Leads';
import Delivery from './pages/adminPage/Delivery';
import Pickup from './pages/adminPage/Pickup';
import Admin_Signup_company_details from './pages/adminPage/Admin_Signup_company_details';
import Admin_Signup_personal_details from './pages/adminPage/Admin_Signup_personal_details';
import AdminLogin from './pages/adminPage/AdminLogin';

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
        <Route path='/home2' element={<Home2/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/companyInfo' element={<CompanyInfo/>}></Route>
        <Route path='/companyDetails' element={<CompanyDetails/>}></Route>
        <Route path='/iserv' element={<Iserv/>}></Route>
        <Route path='/leads' element={<Leads/>}></Route>
        <Route path='/delivery' element={<Delivery/>}></Route>
        <Route path='/pickup' element={<Pickup/>}></Route>
        <Route path='/admin_signup_company_details' element={<Admin_Signup_company_details/>}></Route>
        <Route path='/admin_signup_personal_details' element={<Admin_Signup_personal_details/>}></Route>
        <Route path='/admin_login' element={<AdminLogin/>}></Route>
        
       </Routes>
    </div>
  );
}

export default App;
