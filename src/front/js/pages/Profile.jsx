import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await actions.createPost(content);
    console.log(content);
  }

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      // se redirecciona a usuarios si no estám autenticados
      navigate("/");
      return;
    }
    actions.getUserData();
    actions.getPosts();
  }, []);
  //   console.log("esto es jwt", jwt);
  return (
    <div className="container">
      <h1 className="mb-3 mt-3">
        <span className="text-primary">
          Profile {store.userData && store.userData.email}
        </span>
      </h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Contenido</label>
              <textarea
                placeholder="contenido"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="my-5">
        {store.posts.map((post) => {
          return (
            <div key={post.id + post.user_id}>
              {post.content}
              <hr />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
