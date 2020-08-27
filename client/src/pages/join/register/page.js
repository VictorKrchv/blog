import * as React from "react";
import {
  Container,
  H2,
  Input,
  Link,
  Card,
  Button,
  MainTemplate,
} from "../../../ui";
import { useStore } from "effector-react";
import {
  emailChanged,
  $email,
  $password,
  passwordChanged,
  formSubmitted,
  formUnmounted
} from "./model";
import { Col } from "../../../lib/styled-components-layout";
import { Header } from "../../../features/common/header";

export const JoinRegisterPage = () => {

  React.useEffect(() => {
    return formUnmounted
  }, [])

  return (
    <MainTemplate header={<Header/>}>
      <Container justify="center" align="center" >
        <Col margin="200px 0" width="420px">
          <Card>
            <RegisterForm />
            <Link margin="10px 0 -10px 0" to="/login">
              Already have account?
            </Link>
          </Card>
        </Col>
      </Container>
    </MainTemplate>
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
      <Button type="submit" width="100%">
        Register
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
