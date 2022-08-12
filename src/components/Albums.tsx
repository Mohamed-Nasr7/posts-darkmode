import { useState, useEffect } from 'react';
import { baseUrl } from '../constants/url';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMedia = (path: string) => {
      return fetch(`${baseUrl}/${path}`);
    };
    const getData = async () => {
      const [res1, res2] = await Promise.all([
        fetchMedia('albums'),
        fetchMedia('photos'),
      ]);
      console.log(res1, res2);
    };
    getData();
  }, []);

  return <div></div>;
};

export default Albums;
