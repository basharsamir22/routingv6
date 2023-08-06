import {RouterProvider ,createBrowserRouter,createRoutesFromElements, Route} from 'react-router-dom';
import Home from "./pages/Home";
import AllProducts from './pages/AllProducts';
import { getAllPhotos } from './api/productApi';
import {action as postAction,loader as postLoader} from './pages/Product';
import Product from './pages/Product';
import { ErrorPage } from './pages/ErrorPage';

  const router =createBrowserRouter(createRoutesFromElements([
    <Route path="/" element={<Home/>}/>,
    <Route path="/allproducts" element={<AllProducts/>} loader={getAllPhotos} />,
    <Route path="/product/:id" element={<Product/>} loader={postLoader} action={postAction} errorElement={<ErrorPage/>}/>,
  ]))
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
