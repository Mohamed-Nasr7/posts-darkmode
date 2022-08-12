import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPostId, setPostTitle, setPostBody } from '../redux/actions';

export interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        if (!response.ok) throw new Error();
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch {
        setError('An error occured!! please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const onPostClick = (id: number, title: string, body: string) => {
    dispatch(setPostId(id));
    dispatch(setPostTitle(title));
    dispatch(setPostBody(body));
    navigate('/post');
  };

  return (
    <table className='table table-hover table-bordered w-75 m-auto'>
      <thead>
        <tr>
          <th scope='col'>Post title</th>
          <th scope='col'>Post body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(({ id, title, body }: Post) => (
          <tr key={id} onClick={() => onPostClick(id, title, body)}>
            <td>{title}</td>
            <td>{body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;
