import "./home.css"
import Header from "./header"
import Post from "./post"
import Sidebar from "./sidebar"
export default function Home() {
  return (
    <>
   <Header/>
    <div className="home">
      <Post/>
<Sidebar/>
    </div>
    </>
  )
}
