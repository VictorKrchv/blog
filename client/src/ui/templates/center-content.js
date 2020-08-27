import React from "react";
import styled from "styled-components";

export const CenterContentTemplate = ({ children, footer }) => (
  <CenterContent>
    {children}
    {footer}
  </CenterContent>
);

// CenterContentTemplate.propTypes = {
//   children: PropTypes.node.isRequired,
//   footer: PropTypes.node,
// }

CenterContentTemplate.defaultProps = {
  footer: null,
};

export const CenterContent = styled.main`
  /*display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-direction: column;
  width: 100%; */
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: var(--primary-text);
`;
