import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Experience = lazy(() => import('./pages/experience'));
const ComingSoon = lazy(() => import('./pages/coming-soon'));
const NotFound = lazy(() => import('./pages/not-found'));

const Routing = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="experiences" element={<Experience />} />
                <Route path="projects" element={<ComingSoon />} />
                <Route path="articles" element={<ComingSoon />} />
                <Route path="contacts" element={<ComingSoon />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default Routing;
