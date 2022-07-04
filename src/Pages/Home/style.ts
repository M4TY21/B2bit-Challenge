import styled from "styled-components";

import { Form, Field, ErrorMessage } from "formik";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  background: #fafafa;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 80%;
  max-width: 27rem;
  height: 33rem;
  box-shadow: 0px 0px 4rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  border-radius: 0.5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  margin-top: 4rem;
  width: 19rem;
  max-width: 70%;
  height: 6rem;
`;

export const FormContainer = styled(Form)`
  margin: 2rem 1.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  width: 87%;
`;

export const Label = styled.label`
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled(Field)`
  background: #f1f1f1;
  text-align: start;
  height: 3rem;
  border: 0px;
  border-radius: 0.5rem;
  color: #999999;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  padding-left: 1.2rem;
  margin-bottom: 1.5rem;
`;

export const YupMessage = styled(ErrorMessage)`
  font-size: 1rem;
  margin-top: 0.2rem;
  color: red;
`;

export const Button = styled.button`
  margin-top: 1.2rem;
  height: 3.3rem;

  background-color: #02274f;
  border-radius: 0.5rem;

  font-family: "Nunito";
  font-weight: 700;
  font-size: 1.2rem;
  color: #fafafa;

  cursor: pointer;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;
