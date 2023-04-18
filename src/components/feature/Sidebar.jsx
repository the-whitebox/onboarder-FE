import React, { useState } from "react";
import "../../style/Sidebar.css";
import { FaTh, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import {
  HiOutlineNewspaper,
  HiUserAdd,
  HiDocumentReport,
} from "react-icons/hi";
import { RiUserLocationLine } from "react-icons/ri";
import {
  MdOutlineTaskAlt,
  MdSchedule,
  MdOutlineHelpOutline,
} from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <AiOutlineHome />,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/personal/details",
      name: "My Account",
      icon: <FaRegUserCircle />,
    },
    {
      path: "/news-feed",
      name: "News Feed",
      icon: <HiOutlineNewspaper />,
    },
    {
      path: "/task",
      name: "Task",
      icon: <MdOutlineTaskAlt />,
    },
    {
      path: "/location",
      name: "Location",
      icon: <RiUserLocationLine />,
    },
    {
      path: "/team-members",
      name: "Add People",
      icon: <HiUserAdd />,
    },
    {
      path: "/schedule",
      name: "Schedule",
      icon: <MdSchedule />,
    },
    {
      path: "/times-sheet",
      name: "Times Sheet",
      icon: <TbCalendarTime />,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: <HiDocumentReport />,
    },
  ];
  return (
    <>
      <Navbar />
      <div id="container">
        <div
          style={{
            width: isOpen ? "300px" : "50px",
            borderRadius: isOpen ? "0px 30px 30px 0px" : "0px",
          }}
          className="sidebar"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div>
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index}>
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }}>
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
          <div>
            <NavLink to="/need-help">
              <div className="icon">
                <MdOutlineHelpOutline />
              </div>
              <div style={{ display: isOpen ? "block" : "none" }}>
                Need Help
              </div>
            </NavLink>
            <NavLink to="/settings">
              <div className="icon">
                <FiSettings />
              </div>
              <div style={{ display: isOpen ? "block" : "none" }}>Settings</div>
            </NavLink>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
