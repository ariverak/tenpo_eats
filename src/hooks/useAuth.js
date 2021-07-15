import {useEffect, useState} from 'react';

export default function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: 'Juan Rivera',
        photo: 'https://ariverak-cv.vercel.app/me.png',
      });
    }, 1000);
  }, [setUser]);
  return {
    user,
  };
}
