import './sidebarPeople.css'

function SidebarPeople({people}) {
  return (
        <li className="sidebarFriend">
              <img src={people.profilePicture} alt="" className="sidebarFriendImg" />
              <span className='sidebarFriendName'>{people.username}</span>
        </li>
  )
}

export default SidebarPeople