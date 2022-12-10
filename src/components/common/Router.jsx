import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from '../../pages/Calendar';
import ShoeCase from '../../pages/ShoeCase';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<ShoeCase />} />
      <Route path='/calendar' element={<Calendar />} />
      <Route path='/*' element={<p>Page Not Found</p>} />
    </Routes>
  );
}

export default Router;
