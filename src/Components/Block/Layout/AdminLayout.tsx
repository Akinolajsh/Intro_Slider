import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sider from "../Sider";
import AdminHeader from "../AdminHeader";
import styled from "styled-components";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Container>
        <Sider />
        <Outlet />
      </Container>
    </div>
  );
};

export default AdminLayout;

const Container = styled.div`
  width: 100%;
  display: flex;
`;
