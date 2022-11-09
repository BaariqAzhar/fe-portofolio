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

const MediaSocial = ({ data }) => {
    return <>MediaSocial</>;
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
            <MediaSocial data={dashData?.socialMedia} />
        </div>
    );
};

export default DashboardContainer;
