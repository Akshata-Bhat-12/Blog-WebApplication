import "./top.css"
import image from './imgaes/3b5e6c7caaeeba45303704e74f7f92b5.jpg';
import { Link } from "react-router-dom";
export default function Topbar() {
  const user=false;
  return (
    <div className='top'>
    <div className="topleft">
    <i className="topicon fa-brands fa-facebook"></i>
    <i class="topicon fa-brands fa-square-instagram"></i>
    <i class="topicon fa-brands fa-square-twitter"></i>
    <i class="topicon fa-brands fa-square-whatsapp"></i>

    </div>

    <div className="topcenter">
    <ul className="toplist">
      <li className="topitem">
        <Link className='link' to="/" >HOME</Link>
        {/* style in index.html */}
      </li>
      <li className="topitem"><Link className='link' to="/" >ABOUT</Link></li>
      <li className="topitem"><Link className='link' to="/" >CONTACT</Link></li> 
      <li className="topitem"><Link className='link' to="/write7" >WRITE</Link></li>
      <li className="topitem">
        { user && "LOGOUT"}</li>
    </ul>
    </div>

    <div className="topright">

      {user? (
   <img className="topimage" src={image} alt="Online Education Laptop" />

  ):(
    <ul className="toplist">
      <li className="topitem">
    <Link className='link' to="/login9" >Login</Link>
    </li>
    <li className="topitem">
    <Link className='link' to="/register10" >Register</Link>
    </li>
    </ul>
  )}
   <i className="searchicon fa-solid fa-magnifying-glass"></i>

     </div>
    </div>
  )
}
