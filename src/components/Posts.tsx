import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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

  return (
    <table className='table table-hover table-bordered w-75 m-auto'>
      <thead>
        <tr>
          <th scope='col'>Post title</th>
          <th scope='col'>Post body</th>
        </tr>
      </thead>
      <tbody>
        {
          <tr>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        }
      </tbody>
    </table>
  );
};

export default Posts;
