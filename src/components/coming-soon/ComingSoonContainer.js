import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const ComingSoonContainer = () => {
    let navigate = useNavigate();

    return (
        <Result
            title="This page is coming soon!"
            extra={
                <Button type="primary" onClick={() => navigate('/')}>
                    Go Back to Dashboard
                </Button>
            }
        />
    );
};

export default ComingSoonContainer;
