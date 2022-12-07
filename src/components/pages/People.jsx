import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Input, Table } from "antd";
import "../../style/People.css";

const People = () => {
  const dataSource = [
    {
      key: 1,
      name: "Asher Muneer",
      access: "Supervisor",
      location: "Whitebox2",
      status: "employed",
      email: "asher.munir@whitebox.com",
      mobile: "0123123123",
    },
    {
      key: 1,
      name: "Asif",
      access: "Advisor",
      location: "Whitebox2",
      status: "employed",
      email: "asif.bashir@whitebox.com",
      mobile: "0123123123",
    },
    {
      key: 1,
      name: "Talha",
      access: "System Adminestrator",
      location: "Whitebox2",
      status: "employed",
      email: "talha.tariq@whitebox.com",
      mobile: "0123123123",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Access",
      dataIndex: "access",
    },
    {
      title: "Main Location",
      dataIndex: "main location",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
  ];
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
      <div className="table">
        <Input.Search placeholder="Searh here..." />
        <Table columns={columns} dataSource={dataSource}></Table>
      </div>
    </>
  );
};

export default People;
