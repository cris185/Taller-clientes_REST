import { Spin } from 'antd';
import React, { lazy } from 'react';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

const MainLayout = lazy(() => import('./components/Layout/Layout'));

const App = () => {
  return (
    <Suspense fallback={<Spin />}>
      <MainLayout />
      <ToastContainer />
    </Suspense>
  );
};

export default App;
