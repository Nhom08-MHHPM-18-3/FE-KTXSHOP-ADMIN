import React, { useState, useContext } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import AddSeller from "../components/add_seller";
import LayoutPage from "../components/Layout";
import { SellerContext, SellerProvider } from "../context/sellerState";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Sellers() {
  const { sellers, deleteSeller } = useContext(SellerContext);

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
            onClick={() => deleteSeller(id)}
          >
            <DeleteOutlined /> Delete
          </Button>
        </div>
      ),
    },
  ];
  return (
    <LayoutPage>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ paddingBottom: "10px" }}>Sellers Manage</h1>
        <AddSeller />
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={sellers}
          pagination={{
            current: 1,
            pageSize: 5,
            total: 10,
          }}
        />
      </div>
    </LayoutPage>
  );
}
