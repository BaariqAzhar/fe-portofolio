import { Col, Image, Row, Typography } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API_NODE_EXPRESS } from '../../../helper/constants';

const MenuItem = ({ data, active = false }) => {
    return (
        <Link to={data?.path}>
            <Typography.Link strong={active} style={{ fontSize: 16 }}>
                {data?.name}
            </Typography.Link>
        </Link>
    );
};

const Menu = ({ data = [] }) => {
    const { pathname } = useLocation();

    const menuList = data.map((item) => {
        return (
            <Col key={item?.order}>
                <MenuItem data={item} active={pathname === item?.path} />
            </Col>
        );
    });

    return <Row gutter={16}>{menuList}</Row>;
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
        <Row gutter={[16, 32]} style={{ paddingTop: 32, paddingBottom: 32 }}>
            <Col>
                <Image style={{ border: 'red', borderRadius: '50%', width: 80 }} preview={false} src={navbarData?.photo} />
            </Col>
            <Col>
                <Row>
                    <Col span={24}>
                        <Typography.Text strong style={{ fontSize: 30 }}>
                            {navbarData?.name}
                        </Typography.Text>
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
