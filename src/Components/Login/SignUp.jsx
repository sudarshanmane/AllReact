import { UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./SignUp.scss";
import cartLogo from "../../Images/shopping_cart_logo.jpg";
import { NavLink } from "react-router-dom";
import { sigunUpAction } from "../../Store/Actions/BaseActions";

const SignUp = () => {
  const dispatch = useDispatch();

  const userCredRef = useRef({
    name: {
      firstname: "",
      lastname: "",
    },
    username: "",
    email: "",
    address: {
      city: "",
      street: "",
      numbers: "",
      zipcode: "",
      geolocation: {},
    },
    password: "",
  });

  const onFinish = (values) => {
    dispatch(sigunUpAction(userCredRef.current));
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <div className="sizedBox"></div>
      <div className="logoImage">
        <img src={cartLogo} alt="cart_logo" />
        <h3>Ostore</h3>
      </div>
      <div className="sizedBox"></div>
      <div className="form_container">
        <div className="form_div form1">
          <h3>Create an account</h3>
          <Form
            className="signUpForm"
            layout="vertical"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="on"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                className="form_input_feild"
                prefix={<UserOutlined />}
                onChange={(e) =>
                  (userCredRef.current.username = e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                className="form_input_feild"
                prefix={<UserOutlined />}
                onChange={(e) => (userCredRef.current.email = e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input
                className="form_input_feild"
                prefix={<UserOutlined />}
                onChange={(e) =>
                  (userCredRef.current.name.firstname = e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input
                className="form_input_feild"
                prefix={<UserOutlined />}
                onChange={(e) =>
                  (userCredRef.current.name.lastname = e.target.value)
                }
              />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "Please input your city!" }]}
            >
              <Input
                className="form_input_feild"
                prefix={<UserOutlined />}
                onChange={(e) =>
                  (userCredRef.current.address.city = e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              label="Street"
              name="street"
              rules={[{ required: true, message: "Please input your street!" }]}
            >
              <Input
                className="form_input_feild"
                prefix={<UserOutlined />}
                onChange={(e) =>
                  (userCredRef.current.address.street = e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              label="zipcode"
              name="zipcode"
              rules={[
                { required: true, message: "Please input your zipcode!" },
              ]}
            >
              <Input
                className="form_input_feild"
                prefix={<UserOutlined />}
                onChange={(e) =>
                  (userCredRef.current.address.street = e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                className="form_input_feild"
                name="passwoed"
                prefix={<UserOutlined />}
                onChange={(e) =>
                  (userCredRef.current.password = e.target.value)
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit_button"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="login_button">
          <Divider style={{ borderColor: "#BDC3C7" }}>
            Already have an account? <NavLink to={"/login"}>Login</NavLink>
          </Divider>
        </div>
      </div>
    </>
  );
};

export default SignUp;
