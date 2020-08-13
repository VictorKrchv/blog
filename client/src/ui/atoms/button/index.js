import styled from "styled-components";

export const Button = styled.button`
  border-radius: 10px;
  border: 2px solid #b33a3a;
  color: #FAD4CD;
  width: 100%;
  background-color: #b33a3a;
  cursor: pointer;
  font-size: 24px;
  line-height: 1.4rem;
  outline: none;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 120ms, color 120ms, border-color 120ms;
  user-select: none;

  &:hover {
    background-color: #751a2c;
    color: white;
    border-color: #751a2c;
  }
`;
