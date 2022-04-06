import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CreatePet from '../components/Pets/Create';
import Pet from '../components/Pets/Pet';
import PetInfo from '../components/Pets/PetInfo';

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<Spin />}>
        <Route exact path="/" component={Pet} />
        <Route exact path="/pet" component={CreatePet} />
        <Route exact path="/pet/:id" component={PetInfo} />
      </Suspense>
      <ToastContainer />
    </Switch>
  );
};

export default Routes;
