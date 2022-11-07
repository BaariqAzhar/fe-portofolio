import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_NODE_EXPRESS } from '../../../helper/constants';

const url = `${API_NODE_EXPRESS}intro`;

const Navbar = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setMenu(response.data);
        });
    }, []);

    useEffect(() => {
        console.log(menu);
    }, [menu]);

    return (
        <>
            <h1>This is Navbar</h1>
        </>
    );
};

export default Navbar;
