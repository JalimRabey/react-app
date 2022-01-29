import { createContext, useEffect, useState, useContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser({ name: 'Alguém' });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  const userContext = useContext(UserContext);
  return userContext;
};

export default useUserContext;
