import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker, Modal } from "antd";

const AddSeller = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const onFinish = (values) => {
    console.log(values);
    setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setVisible(true);
  };
  return (
    <div>
      <Button
        onClick={showModal}
        type="primary"
        icon={<PlusOutlined />}
        style={{
          marginBottom: 16,
          borderRadius: 6,
          backgroundColor: "#91d5ff",
          color: "black",
        }}
      >
        Add Seller
      </Button>
      <Modal
        title="New Seller"
        visible={visible}
        onCancel={handleCancel}
        okButtonProps={{
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
        width={700}
      >
        <Form
          form={form}
          name="add-seller"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 400 }}>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Please input username!" }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div style={{ width: 400 }}>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input password!" }]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 400 }}>
              <Form.Item
                label="First name"
                name="firstName"
                rules={[{ required: true, message: "Please input firstName!" }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div style={{ width: 400 }}>
              <Form.Item
                label="Last name"
                name="lastName"
                rules={[{ required: true, message: "Please input lastName!" }]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 400 }}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div style={{ width: 400 }}>
              <Form.Item
                label="Number phone"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please input phoneNumber!" },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 400 }}>
              <Form.Item
                label="Date of birth"
                name="birthDay"
                rules={[
                  { required: true, message: "Please input date of birth!" },
                ]}
              >
                <DatePicker style={{ width: "100%" }} format={"DD/MM/YYYY"} />
              </Form.Item>
            </div>
            <div style={{ width: 400 }}>
              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: "Please input address!" }]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>
          <div
            style={{
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  marginBottom: 16,
                  borderRadius: 6,
                  backgroundColor: "#91d5ff",
                  color: "black",
                }}
              >
                New Seller
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddSeller;
