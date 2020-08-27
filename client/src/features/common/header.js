import React from "react";
import styled from "styled-components";
import { Container, Link, H2, Button } from "../../ui";
import { DropMenu } from "./dropmenu";
import { deleteSession, $session, $isAuthenticated } from "./session";
import { tokenDropped } from "./token";
import { useHistory } from "react-router";
import { useStore } from "effector-react";

export const Header = () => {
  const history = useHistory();

  const logout = () => {
    deleteSession();
    tokenDropped();
    history.push("/login");
  };

  const sessionData = useStore($session);
  const isAuthenticated = useStore($isAuthenticated);

  return (
    <HeaderBox>
      <Container>
        <HeaderInner>
          <H2 upperCase>
            <Link to="/" color="white">
              V-TEME
            </Link>
          </H2>
          {isAuthenticated ? (
            <>
              <H2>
                <Link to="/create" color="white">Create article</Link>
              </H2>
              <DropMenu title={sessionData.email}>
                <Link to="/">Blog</Link>
                <Link to="#" onClick={logout}>
                  Logout
                </Link>
              </DropMenu>
            </>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </HeaderInner>
      </Container>
    </HeaderBox>
  );
};

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBox = styled.header`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0 -1rem 4rem rgba(36, 37, 38, 0.3);
  color: var(--primary-text);
  background-color: var(--red);
`;
