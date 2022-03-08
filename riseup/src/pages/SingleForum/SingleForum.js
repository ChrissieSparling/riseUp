import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "../SingleForum/singleForum.css"
import SinglePost from '../../components/SinglePost/SinglePost'

const SingleForum = () => {
  return (
    <div className=" singleForum">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default SingleForum

