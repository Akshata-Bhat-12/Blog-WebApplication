import "./write.css"
import image from './imgaes/slide-4.webp';

export default function Write7() {
  return (
    <div className='write'>
     <img className="writeimg" src={image} alt=""></img> 
      <form className='writefrom'>
<div className='writeformgroup'>
  <label htmlFor='fileinput'>
    <i className='writeicon fas fa-plus'></i>
  </label>
  <input type='file'  id="fileinput" style={{display:"none"}}/>
  <input type='text' placeholder='title' className='writeinput' autoFocus={true}/>
</div>
<div className='writeformgroup'>
  <textarea placeholder='tell your story.....' type="text"  className='writeinput writetext'></textarea>
</div>
<button className='writesubmit' >
  publish
</button>
      </form>
      
    </div>
    
  )
}
