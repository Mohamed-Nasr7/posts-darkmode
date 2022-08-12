import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Post } from './Posts';

const PostComments = () => {
  type Comment = {
    comment: string;
  };

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const post = useSelector((state: Post) => state);

  useEffect(() => {
    if (!post.id) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        );
        if (!response.ok) throw new Error();
        const data = await response.json();
        setComments(data);
        console.log(data);
      } catch {
        setError('An error occured!! please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [post.id]);

  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{post.title}</h5>
          <p className='card-text'>{post.body}</p>
        </div>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>An item</li>
      </ul>
    </div>
  );
};

export default PostComments;
