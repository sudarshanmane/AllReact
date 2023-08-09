import { UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Store/Actions/BaseActions";

const Login = () => {
  const dispatch = useDispatch();

  const userCredRef = useRef({
    password: "",
    username: "",
  });

  const onFinish = (values) => {
    dispatch(loginAction(values));
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          prefix={<UserOutlined />}
          onChange={(e) => (userCredRef.current.username = e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          name="password"
          onChange={(e) => (userCredRef.current.password = e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
