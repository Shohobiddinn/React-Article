import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import { Home, About, SignIn } from './pages';
import { NotFound } from './components';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
