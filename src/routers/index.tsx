import { createBrowserRouter } from 'react-router-dom';
import { About } from '../pages';
import { NotFound } from '../components';
const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home Page</h1>,  
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*', 
    element: <NotFound />,
  },
]);

export default router;
