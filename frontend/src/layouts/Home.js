import React, { useEffect } from "react";
import PostCreate from "../features/posts/PostCreate";
import PostView from "../features/posts/PostView";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, getUserPost } from "../features/posts/TestSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.test.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function logout(e) {
    e.preventDefault();
    //dispatch(logoutUser());
    const userData = {};
    const response = await axios.post(
      "http://localhost:3333/logout",
      userData,
      {
        withCredentials: true,
      }
    );
    if (response.status == 200) {
      // alert('User Logout Success');
      dispatch(getUserDetails());

      navigate("/login");
    }
  }

  






  return (
    <>
      <div>
        {user.id ? (
          <>
            <h4 style={{ color: "indigo " }}>Logged In As: {user.name}</h4>{" "}
            <button type="submit" onClick={logout} className="btn btn-danger">
              Logout
            </button>
          </>
        ) : (
          ""
        )}
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mx-auto">
              <PostCreate />
              <PostView />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
