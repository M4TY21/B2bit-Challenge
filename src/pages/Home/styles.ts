import styled from "styled-components";

import { Form, Field, ErrorMessage } from "formik";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #fafafa;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 80%;
  max-width: 27rem;
  height: 33rem;

  box-shadow: 0px 0px 4rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  border-radius: 0.5rem;
`;

export const Logo = styled.img`
  width: 19rem;
  margin-top: 4rem;
  max-width: 70%;
  height: 6rem;
`;

export const FormContainer = styled(Form)`
  display: flex;
  width: 87%;
  flex-direction: column;
  margin: 2rem 1.5rem 3.5rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;

  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1rem;
`;

export const FormInput = styled(Field)`
  height: 3rem;
  background: #f1f1f1;
  margin-bottom: 1rem;
  padding-left: 1.2rem;

  text-align: start;
  border: 0px;
  border-radius: 0.5rem;

  font-family: "Nunito", sans-serif;
  font-weight: 400;
  color: #999999;
`;

export const YupMessage = styled(ErrorMessage)`
  margin-bottom: 0.3rem;

  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1rem;
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
