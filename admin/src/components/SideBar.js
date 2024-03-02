"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="pt-14"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-9">
          <Sidebar.Item icon={HiChartPie}>
            <Link to='/'>
            Dashboard
            </Link>
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item>
              <Link to="/products">Products</Link>
            </Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item>
              <Link to="/add">Add Products</Link>
            </Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item icon={HiUser}>
            <Link to='/users'>
            Users
            </Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag}>
            <Link to="/products">Products</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
