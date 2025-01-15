import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Layout from './Layout';
import Login from './screens/Login';
import Registration from './screens/Registration';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;