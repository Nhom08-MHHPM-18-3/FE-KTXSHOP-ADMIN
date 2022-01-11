import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Select, Form, Modal } from "antd";
import React, { useState } from "react";
const { Option } = Select;

const Addcategory = () => {
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
        Add Category
      </Button>
      <Modal
        title="New category"
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
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Category Name"
            name="categoryName"
            rules={[{ required: true, message: "Please input category name!" }]}
          >
            <Select defaultValue="Đồ ăn">
              <Option value="Đồ ăn">Đồ ăn</Option>
              <Option value="Đồ dùng">Đồ dùng</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Sub Category"
            name="Subcategory"
            rules={[{ required: true, message: "Please input sub category!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
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
              Add Category
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Addcategory;
