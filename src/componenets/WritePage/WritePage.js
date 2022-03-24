import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Form, Select, Input } from 'antd';
import styled, { css } from 'styled-components';
import Title from "antd/lib/skeleton/Title";
import { Content } from "antd/lib/layout/layout";

const { Option } = Select;

const Box = styled.div`
    margin: 40px;
    border: 1px solid black;
    padding: 45px 20px;
`;

const Button = styled.button`
    color:white;
    background: ${props=>props.color||'gray'};
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 550;

    &:hover{
        background: rgba(255,255,0.9);
    }
`;

const Category = styled.button`
    color: black;
    background:${props=>props.color};
    border: none;
    padding: 0.5rem 1.2rem;
    margin: 0px 4px 0px 0px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-weight: 600;
`;

/** Q&A 작성 페이지 */
function WritePage() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const[inputs, setInputs] = useState({
        title: "",
        type: "",
        content: ""
    })
    
    const{
        title, type, content
    } = inputs;
    
    const writeContent = (e)=>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name);
        console.log(inputs);
    };

    return (
        <div>
            <div style={{display:'flex', position: 'absolute',top:'0px', left: '40px'}}>
            <Category color='#b4b4b4'>QnA</Category>
            <Category color='#e8e8e8'>향수추천</Category>
            </div>
            <Box>
                <Form
                    name="WritePage"
                >
                    <Form.Item
                        name="title"
                        label="제목"
                        rules={[{ message: '제목을 입력하세요.' }]}
                    >
                        <Input name="title" value={title} onChange={writeContent}/>
                    </Form.Item>
                    <Form.Item
                        name="select"
                        label="유형"

                        rules={[{ required: true, message: '게시글 유형을 선택해주세요!' }]}
                    >
                        <Select placeholder="질문유형" name="type" onChange={writeContent}>
                            <Option name="type" value="note">노트</Option>
                            <Option name="type" value="brand">브랜드</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                    >
                        <Input.TextArea name="content" value={content} rows={17} onChange={writeContent} placeholder="내용을 입력하세요" size="large"/>
                    </Form.Item>
                </Form>
                <div style={{ flexDirection: 'row-reverse', display: 'flex' }}>
                    <Button onClick={writeContent}>글쓰기</Button>
                    <Button>취소</Button>
                </div>
            </Box>
        </div>
    )
}

export default WritePage;