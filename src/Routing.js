import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Experience from './pages/experience';

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
