import * as React from "react";
import {
  Container,
  Card,
  Button,
  Input,
  H2,
  Link,
  MainTemplate,
} from "../../../ui";
import { formSubmitted, $errorMessage, clearError } from "./model";
import { Col } from "../../../lib/styled-components-layout";
import { Header } from "../../../features/common/header";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStore } from "effector-react";
import { Alert } from "../../../ui/atoms/alert";

export const JoinLoginPage = () => {
  React.useEffect(() => {
    return clearError();
  }, []);
  const errorMessage = useStore($errorMessage);

  return (
    <MainTemplate header={<Header />}>
      <Container justify="center" align="center">
        <Col margin="200px 0" width="420px" align="stretch">
          <Card textAlign="left">
            <H2 upperCase margin="0 auto 12px">
              Login
            </H2>
            {errorMessage ? (
              <Alert close={clearError} message={errorMessage} />
            ) : null}
            <LoginForm />
            <Link margin="10px 0 -10px 0" to="/register">
              Dont have account?
            </Link>
          </Card>
        </Col>
      </Container>
    </MainTemplate>
  );
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Minimum password length 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => formSubmitted(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Email
        error={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <Password
        error={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      <Button margin="5px 0 0" type="submit">
        Submit
      </Button>
    </form>
  );
};

const Email = (props) => {
  return (
    <Input
      {...props}
      margin="0 0 10px"
      type="email"
      name="email"
      label="email"
      placeholder={"Enter your email"}
    />
  );
};

const Password = (props) => {
  return (
    <Input
      {...props}
      margin="0px 0px 10px 0px"
      type="password"
      name="password"
      label="password"
      placeholder={"Enter your password"}
    />
  );
};
