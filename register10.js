import  './register.css'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className='register'>
      <span className="registertitle">Register</span>
      <form  className="registerform">
      <label>Username</label>
      <input className="registerinput" type="text" placeholder="enter your name....."></input>
        <label>Email</label>
        <input className="registerinput" type="text" placeholder="enter your email....."></input>
        <label >Password</label>
        <input className="registerinput" type="password" placeholder="enter your password...."></input>
      <button className="registerbutton">
        <Link  className="link" to ="/login9" >login</Link></button>
      
      </form>
      <button className="loginbutton">register</button>
      
      
    </div>
  )
}
