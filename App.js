
import './App.css';
import Home from './home';
import Login from './login9';
import Register from './register10';
import Setting8 from './setting8';
import Single6 from './single6';
import "./topbar";
import Topbar from './topbar';
import Write7 from './write7';

import {
  BrowserRouter as Router, 
  Routes, Link, 
  Route
} from "react-router-dom";

function App() {
  const user=false;
  // true itwill goto homepage otherwise go to register page
  return (
    <Router>
     
   <Topbar/>
<Routes>
<Route exact path='/' element={<Home />} />
<Route path='/register10' element={user? <Home/>: <Register />} />  
{/* if user already register dont go toregister gotothomepage  */}

<Route path='/login9' element={user? <Home/>: <Login />} />  
<Route path='/write7' element={user? <Write7/>: <Register />} />
<Route path='/setting8' element={user? <Setting8/>: <Register />} />
<Route path='/posts5/:postId' element={<Single6 />} />

   </Routes>

    </Router>
  );
}

export default App;
