import "./post.css";
import { Delete } from "@material-ui/icons";
import {Users } from "../../dummyData";
import React, { useEffect, useState } from "react";
import { SettingsRemoteSharp } from "@material-ui/icons";

export default function Post({post, index}) {

const deletePostHandler = (postIndex) => {
    SettingsRemoteSharp((oldItems) => {
        
    })
//   const persons = this.state.post.slice(); //pointer to the array persons. slice copies the original array into a new const pointer.
   const persons = [...this.state.post];
  persons.splice(postIndex,1); //split 1 person after the personIndex passed from the array
  this.setState({persons: persons}); //update the persons array with the new reduced array
}
    
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter(u=>u.id===post?.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter(u=>u.id===post?.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <Delete Click={() => this.deletePostHandler(index)}/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                {/* post'?'.desc because some posts don't have a description */}
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="assets/heart.png" alt="" onClick={likeHandler} />
                    
                    <span className="postLikeCounter">{like}</span>
                </div>

                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
            </div>
        </div>
    )
}
