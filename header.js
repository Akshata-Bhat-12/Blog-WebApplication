import "./header.css"
import image from './imgaes/b.webp';
export default function Header() {
  return (
    <div className='header'>
      <div className="headertitles">
        <span className="headertitlesm"> react and node</span>
        <span className="headertitlesb"> Blog</span>
      </div>

<img className="headerimg"  src={image} alt="Online Education Laptop" /> 
    </div>
  )
}

