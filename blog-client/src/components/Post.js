import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";


const api = "http://localhost:5000/posts";

const Post = ({ posts, loadPosts }) => {
  // handle the delete operation
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure want to delete this post?")) {
      axios.delete(`${api}/${id}`);
      toast.success("deleted successfully");
      // rerender the loadPosts function
      loadPosts();
    }
  };
  return (
    <>
      <div className="row">
        {posts.map(({ title, image, short_story, id }) => (
          <div className="col-md-4" key={id}>
            <div className="post__wrapper">
              <h3 className="p-2 text-center">{title}</h3>
              <div className="post__image">
                <img src={image} alt={title}></img>
              </div>
              <p className="story__desc">{short_story}</p>
              <div className="action__icons">
                <div className="post__edit">
                  <BsFillPencilFill />
                </div>
                <div className="post__delete" onClick={() => handleDelete(id)}>
                  <BsFillTrashFill />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
