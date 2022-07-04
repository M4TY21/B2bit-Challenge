import { useState } from "react";

import { Formik } from "formik";

import { schema } from "../../services/schema";
import { LoginUser, handleSignIn } from "../../services/api";

import {
  Container,
  Card,
  YupMessage,
  Title,
  FormContainer,
  Label,
  FormInput,
  Button,
} from "./style";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export function Home() {
  const navigation = useNavigate();

  async function handleSubmit(values: LoginUser) {
    console.log(values);

    try {
      const response = await handleSignIn(values);
      console.log(response.data);
      localStorage.setItem("token", response.data.tokens.access);
      navigation("/profile");
    } catch (err) {
      swal(
        "Algo deu errado",
        "Verifique as credenciais digitadas e tente novamente",
        "error"
      );
    }
  }

  return (
    <Container>
      <Card>
        <Title>b2bit</Title>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {() => (
            <FormContainer>
              <Label>E-mail</Label>

              <FormInput type="email" name="email" />

              <YupMessage name="email" component="p" />

              <Label>Password</Label>

              <FormInput type="password" name="password" />

              <YupMessage name="password" component="p" />

              <Button type="submit">Sign In</Button>
            </FormContainer>
          )}
        </Formik>
      </Card>
    </Container>
  );
}
