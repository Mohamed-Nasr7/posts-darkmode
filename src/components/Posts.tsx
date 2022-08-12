import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState<object | null>(null);
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
      } catch {
        setError('An error occured!! please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return <div></div>;
};

export default Posts;
