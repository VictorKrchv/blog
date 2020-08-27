import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const MainTemplate = ({ header, footer, children }) => (
  <MainContainer>
    {header && <Header>{header}</Header>}
    {children}
    {footer && <Footer>{footer}</Footer>}
  </MainContainer>
);

MainTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired,
};

MainTemplate.defaultProps = {
  header: null,
  footer: null,
};

const MainContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
`;

const Header = styled.header``;

const Footer = styled.footer`
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  padding: 10px 0;
  width: 100%;
`;
