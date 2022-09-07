import React from 'react'

const Post = ({posts}) => {

  return (
    <>
      <div className="row">
        {posts.map(({ title, image, short_story }) => (
          <div className="col-md-4 ">
            <div className="post__wrapper">
              <h3 className='p-2 text-center'>{title}</h3>
              <div className="post__image">
                <img src={image} alt={title}></img>
              </div>
              <p className="story__desc">{short_story}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Post