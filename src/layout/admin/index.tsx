import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Outlet />
    </Suspense>
  );
};

export default AdminLayout;
