import  './login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login'>
      <span className="logintitle">Login</span>
      <form  className="loginform">
        <label>Email</label>
        <input className="logininput" type="text" placeholder="enter your email....."></input>
        <label >Password</label>
        <input className="logininput" type="password" placeholder="enter your password...."></input>
      <button className="loginbutton">Login</button>
      
      </form>
      <button className="registerbutton">
        <Link className="link" to ="/register10" >Register</Link></button>
    </div>
  )
}
