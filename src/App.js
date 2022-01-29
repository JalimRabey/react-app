import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';

import Footer from './components/Footer';
import Header from './components/Header';

import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <UserProvider>
      <Header />
      <Routes />
      <Footer />
    </UserProvider>
  </BrowserRouter>
);

export default App;
