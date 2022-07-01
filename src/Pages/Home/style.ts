import styled from "styled-components";

import { Form, Field, ErrorMessage } from "formik";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 28rem;
  min-height: 32rem;
  border: 1px solid clay;
  box-shadow: 0 0 3em black;
  border-radius: 0.5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-family: "Poppins", sans-serif;
  color: blue;
  font-weight: bold;
  margin-top: 1rem;
`;

export const ErrorMensage = styled.p`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  margin-top: 0.2rem;
  color: red;
`;

export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  gap: 0.4rem;
`;

export const Label = styled.label``;

export const FormInput = styled.input``;

export const Button = styled.button``;
