import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Pagination } from 'antd';
import Select from "react-select";
import SearchBar from "./SearchBar";

const List = styled.table`
    width: 100%;
    word-wrap: break-word;
    word-break: break-word;
    table-layout: fixed;
    border-collapse: collapse;
    font-size: 13pt;
`;

const ListGrid = styled.div`
    display: grid;
    grid-template-columns: 10% 64% 10% 8% 8%;
`;

const Button = styled.button`
    
`;


const UserList = ({ users }) => {
    const search_options = useMemo(
        () => [
            { value: "title", label: "제목" },
            { value: "nickname", label: "작성자" },
            { value: "content", label: "내용" },
        ],
        []
    );
    const sort_options = useMemo(
        () => [
            { value: "latest", label: "최신순" },
            { value: "oldest", label: "오래된순" },
            { value: "comment", label: "댓글수" },
            { value: "view", label: "조회수" },
        ],
        []
    );

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                    <Select options={search_options} defaultValue={search_options[0]} />
                    <SearchBar />
                </div>
                <div style={{ display: "flex" }}>
                    <Select options={sort_options} defaultValue={sort_options[0]} />
                    <Button onClick={console.log("button clicked")}>글쓰기</Button>
                </div>
            </div>
            <div>
                <List>
                    <ListGrid style={{ backgroundColor: 'gray' }}>
                        <div>유형</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>등록일</div>
                        <div>조회수</div>
                    </ListGrid>
                    {users.map(user => {
                        return (
                            <ListGrid key={user.id}>
                                <div>Q&A</div>
                                <div>{user.company.catchPhrase}</div>
                                <div>{user.username}</div>
                                <div>2022.03.18</div>
                                <div>0</div>
                            </ListGrid>)
                    })}
                </List>
            </div>
            <Pagination size="small" total={50} style={{ display:'flex', justifyContent:'center' }} />
        </div>
    );
};

export default UserList;