import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import AdminLayout from "../components/layout_signin";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

function Login() {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    if (values.username === "admin" && values.password === "admin12") {
      setLoading(true);
      console.log("login");
      setTimeout(() => {
        setDisable(true);
        setLoading(false);
        router.push("/");
      }, 4000);
    } else {
      notification.error({
        message: "Login Failed",
        description:
          "User name or password is incorrect. Please try logging in again.",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AdminLayout>
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
            disabled={disable}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </AdminLayout>
  );
}

export default Login;
