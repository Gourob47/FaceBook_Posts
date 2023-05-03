import React, { useState } from "react";
import { Input, Modal } from "antd";

import { useDispatch } from "react-redux";
import { delCommentReply, deletePost_2, deletePost_3, editReplyComment, } from "./TestSlice";

const PostEditModal_3 = (props) => {

  const {id,user_id}= props.reply;
  
   

  const [content,setContent]=useState(props.reply.content);


 
 


  const [openEditModal, setOpenEditModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [postEdit, setNewPostEdit] = useState();

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (e) => {
    e.preventDefault();
    dispatch(editReplyComment({content,id, user_id}))
    setContent("");
    setIsModalOpen(false);
    setOpenEditModal(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setOpenEditModal(false);
  };

  const handlePostCloseModal = () => {
    setOpenEditModal(false);
  };
  const handlePostModal = () => {
    setOpenEditModal(true);
  };

  const handleDeletePost = (e) => {
    e.preventDefault();
   
    dispatch(delCommentReply({id,user_id}));
    setIsModalOpen(false);
    setOpenEditModal(false);
  
  };

  return (
    <div>
      <div className="post-modal">
        {openEditModal ? (
          <button className="post-modalbtn" onClick={handlePostCloseModal}>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        ) : (
          <button onClick={handlePostModal} className="post-modalbtn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
            </svg>
          </button>
        )}
        {openEditModal && (
          <div className="modal-open">
            <ul>
              <li>
                <button className="edit-btn" onClick={showModal}>Edit Reply</button>
              </li>
              <li>
                <button className="edit-btn" onClick={e=>handleDeletePost(e)}>Delete Reply</button>
              </li>
            </ul>
          </div>
        )}
        <>
          {/*<div className='create-post'>
    <Input type="text" onClick={showModal} placeholder="Whats On Your Mind" className='form-field'/>
                    </div>*/}

          <Modal
            title="Edit Reply"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            
            okText="Edit Reply"
          >
            <form className="form-create" onChange={(e)=>setContent(e.target.value)}  >
              
              <input
                type="text"
                placeholder=''
                className="form-field"
                value={content}   
                required
              />
            </form>
          </Modal>
        </>
      </div>
    </div>
  );
};

export default PostEditModal_3;
