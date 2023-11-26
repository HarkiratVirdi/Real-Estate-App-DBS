import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import StaffHiringForm from '../pages/Staff/StaffHiringForm';
import Staff from '../pages/Staff/index';
import Client from '../pages/Client/index';
import Branch from '../pages/Branch/index';
import AddBranchForm from '../pages/Branch/AddBranchForm';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/addStaff',
    element: <StaffHiringForm />,
  },
  {
    path: '/staff',
    element: <Staff />,
  },
  {
    path: '/branch',
    element: <Branch />,
  },
  {
    path: '/addbranch',
    element: <AddBranchForm />,
  },
  {
    path: '/client',
    element: <Client />,
  },
];

export default createBrowserRouter(routes);
