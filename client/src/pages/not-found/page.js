import * as React from "react";
import { Container, Link } from "../../ui";

export const NotFoundPage = () => {
  return (
    <Container>
      <div>Not Found</div>
      <Link to="/">Back to main page</Link>
    </Container>
  );
};
