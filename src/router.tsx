import { createBrowserRouter } from 'react-router-dom';
import GeneralLayout from './components/general-layout';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import Join from './routes/join';
import Explore from './routes/explore';
import Notifications from './routes/notifications';
import Messages from './routes/messages';
import Lists from './routes/lists';
import Bookmarks from './routes/bookmarks';
import Communities from './routes/communities';
import Premium from './routes/premium';
import More from './routes/more';
import ProtectedRoute from './routes/protected-route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <GeneralLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'explore',
        element: <Explore />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'messages',
        element: <Messages />,
      },
      {
        path: 'lists',
        element: <Lists />,
      },
      {
        path: 'bookmarks',
        element: <Bookmarks />,
      },
      {
        path: 'communities',
        element: <Communities />,
      },
      {
        path: 'premium',
        element: <Premium />,
      },
      {
        path: 'more',
        element: <More />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/join',
    element: <Join />,
  },
]);
