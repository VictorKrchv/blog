import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${props => props.color ? props.color : "var(--primary-text)" };
  margin: ${props => props.margin ? props.margin : 0};

  &:hover {
    text-decoration: underline;
  }
`
