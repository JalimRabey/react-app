import useUserContext from '../../contexts/UserContext';

const AboutPage = () => {
  const { user } = useUserContext();

  return (
    <div>
      <h1>AboutPage</h1>
      <p>User Name: {user.name}</p>
    </div>
  );
};

export default AboutPage;
