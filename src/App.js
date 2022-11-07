import Navbar from './components/global/layout/Navbar';
import Dashboard from './pages/dashboard';
import 'antd/dist/antd.css';

// todo
// Navbar
// Routing
const App = () => {
    return (
        <>
            <Navbar />
            <Dashboard />
        </>
    );
};

export default App;
