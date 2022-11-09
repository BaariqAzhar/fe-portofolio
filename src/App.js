import Navbar from './components/global/layout/Navbar';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Col, Row } from 'antd';
import Routing from './Routing';

const App = () => {
    // eslint-disable-next-line no-undef
    const screenWidth = window.screen.width;

    return (
        <BrowserRouter>
            <Row justify="center">
                <Col style={{ width: screenWidth >= 800 ? 800 : '100vw' }}>
                    <Navbar />
                    <Routing />
                </Col>
            </Row>
        </BrowserRouter>
    );
};

export default App;
