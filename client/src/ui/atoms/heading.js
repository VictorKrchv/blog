import styled from "styled-components";

export const H2 = styled.h2`
  text-transform: ${(props) => (props.upperCase ? "uppercase" : "inherit")};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;
// #261421
