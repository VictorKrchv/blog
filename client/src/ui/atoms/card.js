import styled from "styled-components";
import { mixins } from "../../lib/styled-components-layout";

export const Card = styled.div`
  ${mixins}
  width: auto;
  display: flex;
  flex-flow: column;
  border-radius: 4px;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 0.6rem 1rem rgba(179, 58, 58, 0.18);

  background-color: white;
  color: black;
`;
