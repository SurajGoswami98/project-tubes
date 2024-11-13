import App from '../App';
import { createBrowserRouter } from "react-router-dom";
import React from 'react';
import { Suspense } from 'react';


// Common Suspense Wrapper Component
const lazyLoad = (importElement) => {
  const LazyComponent = React.lazy(importElement);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    name: 'login',
    element: lazyLoad(() => import('../layouts/login.jsx')),
  },
  {
    path: "/reset-password",
    name: 'reset-password',
    element: lazyLoad(() => import('../pages/ResetPassword/index.jsx')),
  },
  {
    path: "/register",
    name: 'register',
    element: lazyLoad(() => import('../pages/Register/index.jsx')),
  }
]);

export default router;