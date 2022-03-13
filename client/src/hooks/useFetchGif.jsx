import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_GIPHY_API;
const URL = 'https://api.giphy.com/v1/gifs/search';
const DEFAULT =
  'https://i.pinimg.com/originals/68/a0/9e/68a09e774e98242871c2db0f99307420.gif';

const useFetchGif = keyword => {
  const [url, setUrl] = useState('');

  const fetchGif = async () => {
    try {
      const query = keyword.split(' ').join('');
      const res = await fetch(`${URL}?api_key=${API_KEY}&q=${query}&limit=1`);
      const { data } = await res.json();
      setUrl(data[0]?.images?.downsized_medium?.url);
    } catch (err) {
      setUrl(DEFAULT);
    }
  };

  useEffect(() => {
    if (keyword) fetchGif();
  }, [keyword]);

  return url;
};

export default useFetchGif;
