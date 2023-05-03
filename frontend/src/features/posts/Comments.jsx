import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { commentAddAction } from "./PostSlice";
import { v4 as uuidv4 } from "uuid";
import SingleComment from "./SingleComment";
import { addComment, getPostComment, postComment } from "./TestSlice";
import axios from "axios";

const Comments = (props) => {
  //const commentList= useSelector(state=> state.test.comment)
  const commentList = useSelector((state) => state.test.posts);

  const [content, setContent] = useState();

  const { user_id, id } = props.comment;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postComment({ content, id, user_id }));
    setContent("");
  };

  return (
    <div>
      <div className="comment">
        <form className="comment-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Write a comment...."
            className="comment-input"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
          />
          <button className="comment-submit" type="submit">
            <i className="fa fa-solid fa-paper-plane"></i>
          </button>
        </form>
        <div className="comment-show">
          {commentList &&
            commentList.map((item) => {
              if (item.id == id) {
                return (
                  <>
                    {item.comments &&
                      item.comments.map((item1) => {
                        return <>
                        
                       <SingleComment comment={item1}/>
                        </>;
                      })}
                  </>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
