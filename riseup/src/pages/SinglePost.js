import React from 'react'
import "../css/singlePost.css"
import Sidebar from '../components/Sidebar/Sidebar'

const SinglePost = () => {
  return (
    <div className='singlePost'> 
    <div className="singlePostWrapper">
        <h1 className="singlePostTitle">Sinlge Post</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero et illo fuga praesentium optio corrupti, eligendi sapiente similique, porro suscipit quas laboriosam saepe itaque. Iure vitae nesciunt sit alias.
        </p>
        <Sidebar />
        </div>
      
    </div>
  )
}

export default SinglePost
