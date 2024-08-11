import './sidebar.css'
import image from './imgaes/slide-2.jpg';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
       <span className="sidebartitle">
        About ME
        <img src={image} alt=""></img>
        <p>lorem fhdfjdfkdfkdf jhjdhfghjfgh hfjhgdshfgsdhfgdshfb gfhagfujbfdue jhfuegdnbfsjgfugfb</p>
       </span>
    
      </div>
    <div className="sidebaritem">
      Categories
      <ul className="sidebarlist">
        <li className="sidebarlistitem">Lift</li>
        <li className="sidebarlistitem">Music</li>
        <li className="sidebarlistitem">Style</li>
        <li className="sidebarlistitem">Sports</li>
        <li className="sidebarlistitem">Movie</li>
        <li className="sidebarlistitem">Tech</li>
      </ul>

    </div>
    <div className="sidebaritem">
      <span className="sidebartitle">Follow Us</span>
      <div className="sidebarsocial">
      <i className="sidebaricon fa-brands fa-facebook"></i>
    <i class="sidebaricon fa-brands fa-square-instagram"></i>
    <i class="sidebaricon fa-brands fa-square-twitter"></i>
    <i class="sidebaricon fa-brands fa-square-whatsapp"></i>
        </div>
    </div>
    </div>
  )
}
