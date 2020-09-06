import styled from "styled-components";
import { mixins } from "../../../lib/styled-components-layout";

export const Button = styled.button`
  ${mixins}
  border-radius: 10px;
  border: none;
  color: white;
  width: ${(props) => props.width};
  background-color: var(--blue);
  cursor: pointer;
  font-size: 24px;
  line-height: 1.4rem;
  outline: none;
  padding: 12px 18px;
  text-align: center;
  text-decoration: none;
  transition: background-color 120ms, color 120ms, border-color 120ms;
  user-select: none;

  &:hover {
    background-color: var(--hover-blue);
    color: white;
  }
`;
