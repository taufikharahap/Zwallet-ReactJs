import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/auth/Login.jsx';
import ResetPassword from '../pages/auth/reset-pasword.jsx';
import CreatePin from '../pages/create-pin/CreatePin.jsx';
import History from '../pages/dashboard/History.jsx';
import Home from '../pages/dashboard/Home.jsx';
import LandingPage from '../pages/landingpage/LandingPage.jsx';
import AddPhone from '../pages/profile/AddPhone.jsx';
import ChangePass from '../pages/profile/ChangePass.jsx';
import ChangePin from '../pages/profile/ChangePin.jsx';
import Detail from '../pages/profile/Detail.jsx';
import ManagePhone from '../pages/profile/ManagePhone.jsx';
import Profile from '../pages/profile/Profile.jsx';
import SignUp from '../pages/signup/Signup.jsx';
import Topup from '../pages/topup/Topup.jsx';
import ConfirmTransfer from '../pages/transfer/ConfirmTransfer.jsx';
import SendMoney from '../pages/transfer/SendMoney.jsx';
import Status from '../pages/transfer/Status.jsx';
import Transfer from '../pages/transfer/Transfer.jsx';
import PrivateRoute from '../privateRoute.js';

export default createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },

  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/history',
    element: <History />,
  },
  {
    path: '/topup',
    element: <Topup />,
  },
  {
    path: '/history',
    element: <History />,
  },
  {
    path: '/topup',
    element: <Topup />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/profile/detail',
    element: <Detail />,
  },
  {
    path: '/profile/change-pin',
    element: <ChangePin />,
  },
  {
    path: '/profile/change-pass',
    element: <ChangePass />,
  },
  {
    path: '/profile/add-phone',
    element: <AddPhone />,
  },
  {
    path: '/profile/manage-phone',
    element: <ManagePhone />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/create-pin',
    element: <CreatePin />,
  },
  // for development purpos only
  {
    path: '/transfers',
    element: <Transfer />,
  },
  {
    path: '/transfers/:id/send',
    element: <SendMoney />,
  },
  {
    path: '/transfers/:id/confirm',
    element: <ConfirmTransfer />,
  },
  {
    path: '/transfers/:id/status',
    element: <Status />,
  },
  // for development purpos only

  {
    path: '/transfer',
    element: (
      <PrivateRoute>
        <Transfer />
      </PrivateRoute>
    ),
  },

  {
    path: '/transfer/:id/send',
    element: (
      <PrivateRoute>
        <SendMoney />
      </PrivateRoute>
    ),
  },

  {
    path: '/transfer/:id/confirm',
    element: (
      <PrivateRoute>
        <ConfirmTransfer />
      </PrivateRoute>
    ),
  },

  {
    path: '/transfer/:id/status',
    element: (
      <PrivateRoute>
        <Status />
      </PrivateRoute>
    ),
  },
]);
