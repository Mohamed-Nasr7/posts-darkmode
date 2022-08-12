import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const PostComments = () => {
  const post = useSelector((state: any) => state);
  console.log(post);

  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{post.title}</h5>
          <p className='card-text'>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
