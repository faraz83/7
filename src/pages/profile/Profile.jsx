import Topbar from "../../components/topbar/Topbar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import './profile.css'

function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
     <Sidebar/>
        <div className="rightProfile">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="/assets/post/3.jpeg" className="profileCoverImg"/>
                    <img src="/assets/post/7.jpeg" className="profileUserImg"/>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Faraz Kasiri</h4>
                    <span className="profileInfoDesc">Hello My friends, Welcome to my tutorial chanel</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile