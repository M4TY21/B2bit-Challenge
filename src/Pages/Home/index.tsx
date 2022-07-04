import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import swal from "sweetalert";

import { LoginUser, handleSignIn } from "../../services/api";
import { schema } from "../../services/schema";

import {
  Container,
  Card,
  Logo,
  YupMessage,
  FormContainer,
  Label,
  FormInput,
  Button,
} from "./style";

import LogoImage from "../../assets/Logo.svg";

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
        <Logo src={LogoImage} alt="Logo" />

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

              <FormInput type="email" name="email" placeholder="@gmail.com" />

              <YupMessage name="email" component="p" />

              <Label>Password</Label>

              <FormInput
                type="password"
                name="password"
                placeholder="****************"
              />

              <YupMessage name="password" component="p" />

              <Button type="submit">Sign In</Button>
            </FormContainer>
          )}
        </Formik>
      </Card>
    </Container>
  );
}
