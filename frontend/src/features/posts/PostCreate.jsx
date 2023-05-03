import React,{useState} from 'react';

import { Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Link, useNavigate } from 'react-router-dom';
import { addPost, fetchPostsSuccess, getUserDetails, logoutUser, userPost } from './TestSlice';
import { useEffect } from 'react';
import axios from 'axios';


const PostCreate = () => {

const user= useSelector(state=>state.test.login);

const [content,setContent]=useState();
const dispatch=useDispatch();
const [isModalOpen, setIsModalOpen] = useState(false);




const navigate= useNavigate();

const showModal = () => {
  setIsModalOpen(true);
};

const handleCancel = () => {
  setIsModalOpen(false);
};

async function handleOk(e){
  setIsModalOpen(false); 
}







async function create(e){
  e.preventDefault();
  dispatch(userPost({content}));
  setContent("");
  setIsModalOpen(false); 
}











  return (
    <>

      
       
    <div className='create-post'>
 

    <Input type="text"  onClick={showModal} placeholder="Whats On Your Mind" className='form-field'/>
    </div>
    
    <Modal title="Create Post"  open={isModalOpen} onOk={create} onCancel={handleCancel} okText="Create Post"  >
    <form className='form-create' onChange={(e)=>setContent(e.target.value)}>
         <input type="text"
         placeholder='Whats On Your Mind'
          className='form-field'
         value={content}
          required/>
      </form>
    </Modal>
    
  </>
  )
}

export default PostCreate
