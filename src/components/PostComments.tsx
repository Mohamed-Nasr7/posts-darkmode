import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Post } from './Posts';

const PostComments = () => {
  type Comment = {
    body: string;
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
    <div className='px-2'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{post.title}</h5>
          <p className='card-text'>{post.body}</p>
        </div>
      </div>
      {!isLoading ? (
        <ul className='list-group list-group-flush mt-4'>
          {comments.map((comment: Comment) => (
            <li className='list-group-item'>{comment.body}</li>
          ))}
        </ul>
      ) : (
        <div className='w-100 text-center mt-3'>
          <div className='spinner-border text-secondary' role='status'></div>
        </div>
      )}
    </div>
  );
};

export default PostComments;
