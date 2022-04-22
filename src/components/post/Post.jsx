import './post.css'
import {MoreVert} from '@mui/icons-material'
import { Users } from '../../dummyData'
import { useState } from 'react'


function Post({post}) {

  const [like, setLike] = useState(post.like);
  const [isliked,setIslike] = useState(false);

  const likeHandler = () =>{
    setLike(isliked ? like - 1 : like + 1);
    setIslike(!isliked)
  }
  
  
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={Users.filter((u)=> u.id === post?.userId)[0].profilePicture} alt="" />
            <span className="postUsername">
              {Users.filter((u)=> u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
          {post?.desc}
          </span>
          <img src={post.photo} className='postImg' alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" onClick={likeHandler} className='likeIcon' alt="" />
            <img src="/assets/heart.png" onClick={likeHandler} className='likeIcon' alt="" />
            <span className="postLikeCounter">{like} like</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post