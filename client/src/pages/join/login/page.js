import * as React from "react";
import { useStore } from "effector-react";
import {
  CenterContentTemplate,
  Container,
  Card,
  Button,
  Input,
  H2,
  Link,
} from "../../../ui";
import {
  $email,
  emailChanged,
  $password,
  passwordChanged,
  formSubmitted,
} from "./model";

export const JoinLoginPage = () => {
  return (
    <CenterContentTemplate>
      <Container>
        <Card>
          <LoginForm />
          <Link margin="10px 0 -10px 0" to="/register">Dont have account?</Link>
        </Card>
      </Container>
    </CenterContentTemplate>
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
  formSubmitted();
};

const LoginForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <H2>Login</H2>
      <Email />
      <Password />
      <Button type="submit" width="100%">
        Login
      </Button>
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
