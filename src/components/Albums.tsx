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

  const renderAlbumPhotos = (album: { id: number }) => {
    return photos.map((photo: any) => {
      if (album.id == photo.albumId) {
        return (
          <div className='col'>
            <div className='card'>
              <a href={photo.thumbnailUrl} target='_blank' rel='noreferrer'>
                <img
                  src={photo.thumbnailUrl}
                  className='card-img-top'
                  alt='thumbnail'
                />
              </a>
              <div className='card-body'>
                <h6 className='card-title'>{photo.title}</h6>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  return !isLoading ? (
    <div>
      {albums.map((album: any) => (
        <div className='card-group m-5'>
          <h3 className='mb-4'>Album Name: {album.title}</h3>
          <div className='row row-cols-1 row-cols-sm-4 row-cols-md-6 g-4'>
            {renderAlbumPhotos(album)}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className='w-100 text-center mt-3'>
      <div className='spinner-border text-secondary' role='status'></div>
    </div>
  );
};

export default Albums;
