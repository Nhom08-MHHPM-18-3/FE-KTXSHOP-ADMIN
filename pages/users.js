import React, { useState, useContext } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Table, Button } from "antd";
import LayoutPage from "../components/Layout";
import { UserContext, UserProvider } from "../context/userState";

export default function Users() {
  const { users, deleteUser } = useContext(UserContext);
  const columns = [
    {
      title: "Name",
      dataIndex: "id",
      key: "id",
      sorter: true,
      // render: (id, student) => (
      //   <div>{student.firstName + " " + student.lastName}</div>
      // ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: true,
    },
    {
      title: "Number phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      sorter: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: true,
    },
    // {
    //   title: "Date create",
    //   dataIndex: "createdAt",
    //   key: "createdAt",
    //   sorter: true,
    //   render: (createdAt) => (
    //     <div>{moment(createdAt).format("DD/MM/YYYY")}</div>
    //   ),
    // },
    {
      title: "Action",
      dataIndex: "id",
      width: 120,
      align: "center",
      render: (id) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              cursor: "pointer",
              backgroundColor: " #ffa39e",
              padding: "3px 6px",
            }}
            onClick={() => deleteUser(id)}
          >
            <DeleteOutlined /> Delete
          </Button>
        </div>
      ),
    },
  ];
  return (
    <LayoutPage>
      <div>
        <h1 style={{ paddingBottom: "10px" }}>Users Manage</h1>
        <div>
          <Table
            columns={columns}
            dataSource={users}
            pagination={{
              current: 1,
              pageSize: 5,
              total: 10,
            }}
          />
        </div>
      </div>
    </LayoutPage>
  );
}
