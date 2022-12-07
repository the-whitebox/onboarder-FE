import React from "react";
import { Table } from "antd";
import { NavLink } from "react-router-dom";

import "../../style/People.css";

const People = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "30%",
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div className="header">
        <div className="logo">Deputy</div>
        <NavLink className="nav">
          <ul className="navbar">
            <li>Me</li>
            <li>News Feed</li>
            <li>Tasks</li>
            <li>Locations</li>
            <li>People</li>
            <li>Schedule</li>
            <li>Time Sheets</li>
            <li>Reports</li>
          </ul>
        </NavLink>
      </div>
      <div>
        <h1>People</h1>
        <p>Showing 3 out of 3 users</p>
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
};

export default People;
