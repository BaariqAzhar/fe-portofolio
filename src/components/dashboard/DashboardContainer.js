import { Card, Col, Image, Row, Typography } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_NODE_EXPRESS } from '../../helper/constants';

const IntroStyledContainer = styled.div`
    h1 {
        font-size: 30px;
    }
    p {
        font-size: 20px;
        text-align: justify;
    }
`;

const Intro = ({ data = '' }) => {
    return (
        <IntroStyledContainer>
            <div dangerouslySetInnerHTML={{ __html: data?.description ?? '  ' }} />
        </IntroStyledContainer>
    );
};

const MediaSocialItem = ({ item }) => {
    return (
        <Card bodyStyle={{ padding: 0 }} hoverable>
            <Row justify="center" align="middle" gutter={[4, 8]} style={{ background: 'white', padding: '8px 16px 8px 8px', borderRadius: 10 }}>
                <Col>
                    <Image
                        style={{
                            borderRadius: '50%',
                            height: 30,
                            maxHeight: 30,
                        }}
                        preview={false}
                        src={item?.logo}
                    />
                </Col>
                <Col>
                    <Typography.Text>{item?.name}</Typography.Text>
                </Col>
            </Row>
        </Card>
    );
};

const MediaSocialList = ({ data }) => {
    const mediaSocialList = data?.map((item) => {
        return (
            <Col key={item?.order}>
                <MediaSocialItem item={item} />
            </Col>
        );
    });

    return <Row gutter={[16, 16]}>{mediaSocialList}</Row>;
};

const DashboardContainer = () => {
    const [dashData, setDashData] = useState({});

    const fetchDashData = async () => {
        try {
            const payload = {
                lang: 'en',
                privilege: 'guest',
            };
            const res = await axios.post(`${API_NODE_EXPRESS}get-dashboard`, payload);
            // console.log('res', res);
            setDashData(res?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDashData();
    }, []);

    return (
        <div style={{ background: '#F1F8FA', width: '100%', borderRadius: 15, padding: 32 }}>
            <Intro data={dashData?.intro?.[0]} />
            <MediaSocialList data={dashData?.socialMedia} />
        </div>
    );
};

export default DashboardContainer;
