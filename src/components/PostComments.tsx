import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../constants/url';
import { Post } from './Posts';

type Comment = {
  body: string;
  id: number;
};

const PostComments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [fetchedPostOnReload, setFetchedPostOnReload] = useState();

  const post = useSelector((state: Post) => state);
  const param = useParams();

  useEffect(() => {
    const postId = post.id || param.id;
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}/posts/${postId}/comments`);
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
            <li key={comment.id} className='list-group-item'>
              {comment.body}
            </li>
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
