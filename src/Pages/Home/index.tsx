import { FormEvent, useState } from "react";

import { Form, Formik, Field, ErrorMessage } from "formik";
import { api } from "../../services/api";

import {
  Container,
  Card,
  ErrorMensage,
  Title,
  FormDiv,
  Label,
  FormInput,
  Button,
} from "./style";

interface User {
  email: string;
  password: string;
}

export function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User>({} as User);
  const [alert, setAlert] = useState(false);
  const [formAlert, setFormAlert] = useState("");

  async function handleSubmit(values: User) {
    console.log(values);

    // const response = await api.post;
  }

  return (
    <Container>
      <Card>
        <Title>b2bit</Title>

        <Formik
          initialValues={{ email, password }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "Campo Obrigatorio";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "email invalido";
            }

            return errors;
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {() => (
            <Form>
              <Field type="email" name="email" />

              <ErrorMessage name="email" component="p" />

              <Field type="password" name="password" />

              <ErrorMessage name="password" component="p" />

              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
}
