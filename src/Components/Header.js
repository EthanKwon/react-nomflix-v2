import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

const HEADER_HEIGHT = `3.5rem`;

const Header = styled.header`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  padding: 0 2.5rem;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Logo = styled.div`
  width: 8rem;
  height: ${HEADER_HEIGHT};
  margin-right: 2.5rem;
  background-color: red;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  padding: 0 0.8rem;
  text-align: center;
`;

const SLink = styled(Link)`
  height: ${HEADER_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Logo />
      <Item current={pathname === "/"}>
        <SLink to="/">홈</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV 프로그램</SLink>
      </Item>
      <Item current={pathname === "/movie"}>
        <SLink to="/movie">영화</SLink>
      </Item>
    </List>
  </Header>
));
