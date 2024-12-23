import { RouterProvider } from 'react-router-dom';
import router from './routers';
import Navbar from './components/Navbar';
function App() {
  return (

    <>
      <div className="container mx-auto pt-2">

        <Navbar />
        <RouterProvider router={router} />
      </div>

    </>)
}

export default App;
