import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingpage/LandingPage.jsx";
import Home from "../pages/dashboard/Home.jsx";
import Profile from "../pages/profile/Profile.jsx";
import Login from '../pages/auth/Login.jsx'
import ResetPassword from '../pages/auth/reset-pasword.jsx'
import SignUp from '../pages/signup/Signup.jsx'
import CreatePin from '../pages/create-pin/CreatePin.jsx'

export default createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
      path: '/reset-password',
      element: <ResetPassword/>
  },
  {
      path: '/signup',
      element: <SignUp/>
  },
  {
      path: '/create-pin',
      element: <CreatePin/>
  },
]);
