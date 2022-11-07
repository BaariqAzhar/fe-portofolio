import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Experience from './pages/experience';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: 'experience',
        element: <Experience />,
    },
    {
        path: '*',
        element: <>404 not found</>,
    },
]);

const Routing = () => {
    return <RouterProvider router={router} />;
};

export default Routing;
