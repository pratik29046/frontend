// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './pages/home/Home';
import Profile from './pages/profile';
import { PageNotFound } from './router/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement : <PageNotFound/>
  },
  {
    path: "/login",
    element: <LoginForm/>,
    errorElement : <PageNotFound/>
  },
  {
    path: "/register",
    element: <RegisterForm/>,
    errorElement : <PageNotFound/>
  },
  {
    path: "/profile",
    element: <Profile/>,
    errorElement : <PageNotFound/>
  }
]);

const App: React.FC = () => (
  <RouterProvider router={router} />
);

export default App;
