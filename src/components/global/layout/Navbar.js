import { Col, Image, Row, Typography } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_NODE_EXPRESS } from '../../../helper/constants';

const MenuItem = ({ data }) => {
    return (
        <Link to={data?.path}>
            <Typography.Link>{data?.name}</Typography.Link>
        </Link>
    );
};

const Menu = ({ data = [] }) => {
    console.log('data', data);

    const menuList = data.map((item) => {
        return (
            <Col key={item?.order}>
                <MenuItem data={item} />
            </Col>
        );
    });

    return <Row gutter={[8, 8]}>{menuList}</Row>;
};

const Navbar = () => {
    const [navbarData, setNavbarData] = useState({});

    const fetchNavbarData = async () => {
        try {
            const payload = {
                lang: 'en',
                privilege: 'guest',
            };
            const res = await axios.post(`${API_NODE_EXPRESS}get-navbar`, payload);
            setNavbarData(res?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNavbarData();
    }, []);

    return (
        <Row gutter={[16, 32]} style={{ paddingTop: 30 }}>
            <Col>
                <Image style={{ border: 'red', borderRadius: '50%', width: 80 }} preview={false} src={navbarData?.photo} />
            </Col>
            <Col>
                <Row>
                    <Col span={24}>
                        <Typography.Title level={1}>{navbarData?.name}</Typography.Title>
                    </Col>
                    <Col span={24}>
                        <Menu data={navbarData?.menu} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Navbar;
