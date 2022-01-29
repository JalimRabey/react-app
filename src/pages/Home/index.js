import useUserContext from '../../contexts/UserContext';

const HomePage = () => {
  const { user } = useUserContext();

  return (
    <div>
      <h1>HomePage</h1>
      <p>User Name: {user.name}</p>
    </div>
  );
};

export default HomePage;
