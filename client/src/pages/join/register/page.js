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
import { formSubmitted, clearError, $errorMessage } from "./model";
import { Col } from "../../../lib/styled-components-layout";
import { Header } from "../../../features/common/header";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert } from "../../../ui/atoms/alert";
import { useStore } from "effector-react";

export const JoinRegisterPage = () => {
  React.useEffect(() => {
    return () => {
      clearError()
    };
  }, [])
  const errorMessage = useStore($errorMessage)
  return (
    <MainTemplate header={<Header />}>
      <Container justify="center" align="center">
        <Col margin="200px 0" width="420px">
          <Card textAlign="left">
            <H2 upperCase margin="0 auto 12px">
              Registration
            </H2>
            {errorMessage ? <Alert close={clearError} message={errorMessage}/> : null}
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

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Minimum password length 6 characters")
        .max(56, "Try a shorter password")
        .required("Required"),
        confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref("password"), null], 'Passwords must match')
    }),
    onSubmit: (values) => formSubmitted(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        placeholder={"Enter your email"}
        margin="0 0 10px"
        type="email"
        name="email"
        label="email"
        error={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <Input
        margin="0 0 10px"
        type="password"
        name="password"
        label="password"
        error={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder={"Enter your password"}
      />
      <Input
        margin="0 0 10px"
        type="password"
        name="confirmPassword"
        label="confirmPassword"
        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        placeholder="Repeat your password here"
      />
      <Button margin="5px 0 0" type="submit">
        Submit
      </Button>
    </form>
  );
};
