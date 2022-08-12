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
  }, []);

  return <div></div>;
};

export default Albums;
