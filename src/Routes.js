import { Routes as Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';

const Routes = () => (
  <Switch>
    <Route path="/about" element={<AboutPage />} />
    <Route path="/" element={<HomePage />} />
  </Switch>
);

export default Routes;
