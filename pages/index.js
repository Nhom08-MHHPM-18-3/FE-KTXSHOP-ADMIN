import LayoutPage from "../components/layout";
import { Table, Form, Input, Button, Select, Modal, Popconfirm } from "antd";
import React, { useState, useContext, useEffect } from "react";
import Addcategory from "../components/add_category";
import { CategoryContext } from "../context/CategoryState";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
const { Option } = Select;

export default function Home() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [categoryIdUpdate, setCategoryIdUpdate] = useState();
  const router = useRouter();

  // const [categories, setCategories] = useState(dataCategory);
  const { categories, deleteCategory } = useContext(CategoryContext);
  const log = useContext(CategoryContext);
  console.log("1: ", log);
  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
      filters: [
        {
          text: "Đồ ăn",
          value: "Đồ ăn",
        },
        {
          text: "Đồ dùng",
          value: "Đồ dùng",
        },
      ],
      onFilter: (value, record) => record.categoryName.indexOf(value) === 0,
      sortDirections: ["descend"],
    },
    {
      title: "Count Products",
      dataIndex: "countProducts",
      key: "countProducts",
      sorter: (a, b) => a.countProducts - b.countProducts,
      // sortDirections: ["descend"],
    },
    {
      title: "Action",
      dataIndex: "id",
      width: 200,
      align: "center",
      render: (id, category) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              cursor: "pointer",
              marginRight: 20,
              backgroundColor: "#fff566",
              padding: "3px 6px",
            }}
            onClick={() => onEdit(id, category)}
          >
            <EditOutlined /> Edit
          </Button>
          <Button
            style={{
              cursor: "pointer",
              backgroundColor: " #ffa39e",
              padding: "3px 6px",
            }}
            onClick={() => deleteCategory(id)}
          >
            <DeleteOutlined /> Delete
          </Button>
        </div>
      ),
    },
  ];
  const onFinish = (values) => {
    console.log(values);
    setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setVisible(true);
  };

  const onEdit = (idCategory, category) => {
    setCategoryIdUpdate(idCategory);
    form.setFieldsValue({
      categoryName: category.categoryName,
      subCategory: category.subCategory,
    });
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // const onDeleteCate = (idCategory) => {
  //   onDelete(idCategory);
  // };
  return (
    <LayoutPage>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ paddingBottom: "10px" }}>Categories Manage</h1>
          <Addcategory />
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={categories}
            // onChange={onChange}
            pagination={{
              current: page,
              pageSize: 5,
              total: 10,
            }}
          />
          <Modal
            title="Update category"
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
              form={form}
              name="control-hooks"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Category Name"
                name="categoryName"
                rules={[
                  { required: true, message: "Please input category name!" },
                ]}
              >
                <Select defaultValue="Đồ ăn">
                  <Option value="Đồ ăn">Đồ ăn</Option>
                  <Option value="Đồ dùng">Đồ dùng</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Sub Category"
                name="Subcategory"
                rules={[
                  { required: true, message: "Please input sub category!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ borderRadius: 6 }}
                >
                  Update
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </LayoutPage>
  );
}
