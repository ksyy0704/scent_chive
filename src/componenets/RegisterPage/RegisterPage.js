import React, {useState} from 'react'
import 'antd/dist/antd.css';
import { Form, Input, LoginForm, Button, Checkbox, Typography } from 'antd';
import styled from 'styled-components';
import palette from '../../../../src/lib/styles/palette';
/*
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const textMap = {
  login: '로그인',
  register: '회원가입'
};

**
 * 에러를 보여줍니다
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;
*/


function RegisterPage(){
    const [ID, setID] = useState("")
    const [Password, setPassword] = useState("")

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Gender, setGender] = useState("")
    const [Age, setAge] = useState("")

    const onIDHandler = (event)=>{
        setID(event.currentTarget.value)
    }

    const onPasswordHandler = (event)=>{
        setPassword(event.currentTarget.value)
    }

    const onNameHandler = (event)=>{
        setName(event.currentTarget.value);
    }

    const onEmailHandler = (event)=>{
        setEmail(event.currentTarget.value)
    }

    const onGenderHandler = (event)=>{
        if(document.getElementById("male").checked==true){
            setGender("male");
        }
        else if(document.getElementById("female").checked==true){
            setGender("female");
        }
        console.log(Gender);
    }

    const onAgeHandler = (event)=>{
        setAge(event.currentTarget.value)
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();

        const body={
            email: Email,
            password: Password
        }
    }

    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            
            <Form style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>ID</label>
                <Input type="text" value={ID} onChange={onIDHandler}></Input>
                <label>비밀번호</label>
                <Input type="password" value={Password} onChange={onPasswordHandler}></Input>

                <label>이름</label>
                <Input type="text" value={Name} onChange={onNameHandler}></Input>
                <label>이메일</label>
                <Input type="text" value={Email} onChange={onEmailHandler}></Input>
                
                <label>성별</label>
                <div style={{flexDirection:'row'}}>
                <input type="checkbox" name="male" id="male" value={Gender} onClick={onGenderHandler}/>남자
                <input type="checkbox" name="female" id="female" value={Gender} onClick={onGenderHandler}/>여자
                </div>

                <label>나이</label>
                <select>
                    <optgroup>
                        <option value="10s">10대</option>
                        <option value="20s">20대</option>
                        <option value="30s">30대</option>
                        <option value="40s">40대</option>
                        <option value="50s">50대</option>
                        <option value="60s">60대</option>
                        <option value="private">비공개</option>
                    </optgroup>
                </select>

                <button type="submit">
                    Login
                </button>
            </Form>
            
        </div>
    )
}
export default RegisterPage;