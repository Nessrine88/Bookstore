import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: bisque;
`;

const Logo = styled.div`
  .logo h2 {
    font-weight: 800;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 30px;
  }
`;

const List = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    list-style: none;
    padding-left: 2rem;
    font-size: 24px;
  }

  a {
    text-decoration: none;
    font-weight: 600;
  }
`;

const Navigation = () => {
  return (
    <NavContainer>
      <Logo>
        <h2>Book Store</h2>
      </Logo>
      <List>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </List>
      <Outlet />
    </NavContainer>
  );
};

export default Navigation;
