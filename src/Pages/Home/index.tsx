import { useState } from "react";

import { Formik } from "formik";

import { schema } from "../../services/schema";
import { User, handleSignIn } from "../../services/api";

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

export function Home() {
  const [user, setUser] = useState<User>({} as User);

  async function handleSubmit(values: User) {
    console.log(values);

    const response = await handleSignIn(user);

    console.log(response);
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

              <Button type="submit">Submit</Button>
            </FormContainer>
          )}
        </Formik>
      </Card>
    </Container>
  );
}
