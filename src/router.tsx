import { createBrowserRouter } from 'react-router-dom';
import GeneralLayout from './components/general-layout';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import Join from './routes/join';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GeneralLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/join',
    element: <Join />
  }
]);
