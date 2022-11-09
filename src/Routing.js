import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Experience = lazy(() => import('./pages/experience'));

const Routing = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="experience" element={<Experience />} />
                <Route path="*" element={<div>404 not found</div>} />
            </Routes>
        </Suspense>
    );
};

export default Routing;
