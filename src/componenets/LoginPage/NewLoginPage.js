import React, { useState } from "react";
import 'antd/dist/antd.css';
import { withRouter } from "react-router-dom";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import Icon from '@ant-design/icons';

const { Title } = Typography;

function LoginPage(props) {
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialID = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
    <Formik
      initialValues={{
        ID: initialID,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        ID: Yup.string()
          .required('ID is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            ID: values.ID,
            password: values.password
          };
            if (rememberMe === true) {
                window.localStorage.setItem('rememberMe', values.ID);
            } else {
                localStorage.removeItem('rememberMe');
            }
            props.history.push("/");
        },500);
    }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">

            <Title level={2}>로그인</Title>
            <form onSubmit={handleSubmit} style={{ width: '350px' }}>

              <Form.Item required>
                <Input
                  id="ID"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your ID"
                  type="text"
                  value={values.ID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.ID && touched.ID ? 'text-input error' : 'text-input'
                  }
                />
                {errors.ID && touched.ID && (
                  <div className="input-feedback">{errors.ID}</div>
                )}
              </Form.Item>

              <Form.Item required>
                <Input
                  id="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              {formErrorMessage && (
                <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
              )}

              <Form.Item>
                <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} >Remember me</Checkbox>
                <a className="login-form-forgot" href="/reset_user" style={{ float: 'right' }}>
                  아이디/비밀번호 찾기
                  </a>
                <div>
                  <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                    Log in
                </Button>
                </div>
                <a href="/register">회원가입</a>
              </Form.Item>
            </form>
          </div>
        );
      }}
    </Formik>
    </div>
  );
};

export default LoginPage;


