import React from 'react';
import { useSelector } from 'react-redux';

const PostComments = () => {
  const post = useSelector((state: any) => state);
  console.log(post);

  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
