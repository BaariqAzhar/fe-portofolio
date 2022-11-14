import { Col, Image, Row, Typography } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_NODE_EXPRESS } from '../../helper/constants';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const { Text } = Typography;

const DateRangeText = ({
    data = '',
    // range = false
}) => {
    const date = data?.split('-');

    const start = moment(date[0], 'YYYY/MM/DD');
    const end = moment(date[1], 'YYYY/MM/DD');
    // const rangeStartEnd = moment.range(start, end);
    // const diffMonths = rangeStartEnd.diff('months');
    // console.log('rangeStartEnd', rangeStartEnd);
    // console.log('diffMonths', diffMonths);

    return (
        <Text>
            {/* {diffMonths} */}
            {start?.format('MMM YYYY')} - {end?.format('MMM YYYY')}
        </Text>
    );
};

const ExperienceItem = ({ item }) => {
    return (
        <Row gutter={[0, 16]} style={{ background: '#F1F8FA', width: '100%', borderRadius: 15, padding: 16 }}>
            <Col span={3} style={{ paddingTop: 8 }}>
                <Row justify="center">
                    <Col>
                        <Image style={{ borderRadius: '50%', width: 60 }} preview={false} src={item?.icon} />
                    </Col>
                </Row>
            </Col>
            <Col span={21}>
                <Row gutter={[8, 0]}>
                    <Col span={24}>
                        <Text strong>{item?.role}</Text>
                    </Col>
                    <Col span={24}>
                        <Text strong>
                            {item?.company} {' · '}
                        </Text>
                        <Text>{item?.employment_type}</Text>
                    </Col>
                    <Col span={24}>
                        <Text>
                            <DateRangeText data={item?.date_range} />
                        </Text>
                    </Col>
                    <Col span={24}>
                        <Text>{item?.location}</Text>
                    </Col>
                    <Col span={24}>
                        <div dangerouslySetInnerHTML={{ __html: item?.description ?? '  ' }} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

const ExperienceList = ({ data }) => {
    const experienceList = data?.map((item) => {
        return (
            <Col key={item?.order}>
                <ExperienceItem item={item} />
            </Col>
        );
    });

    return <Row gutter={[8, 16]}>{experienceList}</Row>;
};

const ExperienceContainer = () => {
    const [experiences, setExperiences] = useState([]);

    const fetchExperiences = async () => {
        try {
            const payload = {
                lang: 'en',
                privilege: 'guest',
            };
            const res = await axios.post(`${API_NODE_EXPRESS}get-experience`, payload);
            // console.log('res', res);
            setExperiences(res?.data?.experience);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchExperiences();
    }, []);

    return (
        <>
            <h1>Experience</h1>
            <ExperienceList data={experiences} />
        </>
    );
};

export default ExperienceContainer;
