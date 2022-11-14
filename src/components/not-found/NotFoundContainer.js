import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFoundContainer = () => {
    let navigate = useNavigate();

    return (
        <Result
            status="warning"
            title="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={() => navigate('/')}>
                    Go Back to Dashboard
                </Button>
            }
        />
    );
};

export default NotFoundContainer;
