import PublicLayout from '@/layouts/public-layout';
import Cart from '@/pages/cart';
import Catalog from '@/pages/catalog';
import Home from '@/pages/home';
import NotFound from '@/pages/not-found';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'catalogo', element: <Catalog /> },
      { path: 'carrito', element: <Cart /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;