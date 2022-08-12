import React from 'react';
import { useSelector } from 'react-redux';

const PostComments = () => {
  const post = useSelector((state: any) => state);
  console.log(post);

  return <div></div>;
};

export default PostComments;
