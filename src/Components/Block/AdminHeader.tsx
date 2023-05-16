import React from "react";
import styled from "styled-components";

const AdminHeader = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>LOGO</Logo>
        </Main>
      </Container>
    </div>
  );
};

export default AdminHeader;

const Logo = styled.div``;
const Main = styled.div`
  display: flex;
  /* /* justify-content: center; */
  align-items: center;
  height: 100%;
  margin-left: 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  color: white;
`;
