import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

const Post = ({ posts }) => {
  return (
    <>
      <div className="row">
        {posts.map(({ title, image, short_story }) => (
          <div className="col-md-4 ">
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
                <div className="post__delete">
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
