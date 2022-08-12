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
      const albums = await res1.json();
      const photos = await res2.json();
      setAlbums(albums);
      setPhotos(photos);
    };
    getData();
  }, []);

  return (
    <div>
      <div className='card-group m-4'>
        <div className='card'>
          <img src={''} className='card-img-top' alt='album' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
