import App from '../App';
import { createBrowserRouter } from "react-router-dom";
import React from 'react';
import { Suspense } from 'react';
import Spinner from '../components/Spinner.jsx';
import Base from '../layouts/base.jsx';

// Common Suspense Wrapper Component
const lazyLoad = (importElement) => {
  const LazyComponent = React.lazy(importElement);
  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "login",
        name: 'login',
        element: lazyLoad(() => import('../layouts/login.jsx')),
      },
      {
        path: "reset-password",
        name: 'reset-password',
        element: lazyLoad(() => import('../pages/ResetPassword/index.jsx')),
      },
      {
        path: "register",
        name: 'register',
        element: lazyLoad(() => import('../pages/Register/index.jsx')),
      }
    ]
  }
], {
  basename: import.meta.env.BASE_URL
});

export default router;