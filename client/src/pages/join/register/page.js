import * as React from "react";
import {
  Container,
  CenterContentTemplate,
  H2,
  Input,
  Link,
  Card,
  Button,
} from "../../../ui";
import { useStore } from "effector-react";
import {
  emailChanged,
  $email,
  $password,
  passwordChanged,
  formSubmitted,
} from "./model";

export const JoinRegisterPage = () => {
  return (
    <CenterContentTemplate>
      <Container>
        <Card>
          <RegisterForm />
          <Link margin="10px 0 -10px 0" to="/login">Already have account?</Link>
        </Card>
      </Container>
    </CenterContentTemplate>
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
  formSubmitted();
};

const RegisterForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <H2>Registration</H2>
      <Email />
      <Password />
      <Button type="submit" width="100%">Register</Button>
    </form>
  );
};

const Email = () => {
  const email = useStore($email);

  return (
    <Input
      margin="0 0 10px"
      type="email"
      name="email"
      label="email"
      value={email}
      placeholder={"Enter your email"}
      onChange={emailChanged}
    />
  );
};

const Password = () => {
  const password = useStore($password);
  return (
    <Input
      margin="0px 0px 10px 0px"
      type="password"
      name="password"
      label="password"
      value={password}
      onChange={passwordChanged}
      placeholder={"Enter your password"}
    />
  );
};
