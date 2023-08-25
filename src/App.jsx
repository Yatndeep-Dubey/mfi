import { Route, Routes } from 'react-router-dom';
import {
  Login, Signup_personal_details,Signup_company_details
} from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route> 
        <Route path='/signup_personal_details' element={<Signup_personal_details/>}></Route>
        <Route path='/signup_company_details' element={<Signup_company_details/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
