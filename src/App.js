import Navbar from './components/global/layout/Navbar';
import 'antd/dist/antd.css';

import { Col, Row } from 'antd';
import Routing from './Routing';

const App = () => {
    const screenWidth = window.screen.width;

    return (
        <Row justify="center">
            <Col style={{ width: screenWidth >= 800 ? 800 : '100vw' }}>
                <Navbar />
                <Routing />
            </Col>
        </Row>
    );
};

export default App;
