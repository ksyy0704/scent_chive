import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserList from './UserList';

import 'antd/dist/antd.css';
import { Form, Select, Input } from 'antd';
import styled, { css } from 'styled-components';

function LookupPage(){
        const [users, setUsers] = useState([]);

        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    setUsers(response.data);
                    console.log(response.data);
                });
        }, []);
        return (
            <>
                <h1>게시글 조회</h1>
                <UserList users={users}/>
            </>
        );
}

export default LookupPage;