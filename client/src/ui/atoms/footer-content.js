import React from "react";
import { Container } from "../templates";

export const FooterContent = (
  <Container>
    <div>
      &copy; 2018–{new Date().getFullYear()}{" "}
      <a
        href="http://instagram.com/vityan_21"
        rel="noopener noreferrer"
        target="_blank"
      >
        Baburka
      </a>
    </div>
  </Container>
);
