import styled from "styled-components";

export const Header = styled.nav`
  position: absolute;
  width: 100%;
  height: 4.375rem;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  z-index: 0;
`;

export const Button = styled.button`
  height: 2.75rem;
  width: 17rem;
  margin-right: 2.125rem;

  background-color: #02274f;
  border-radius: 0.4rem;

  font-family: "Inter";
  font-weight: 700;
  font-size: 1rem;
  color: #fff;

  cursor: pointer;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;

export const Container = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f1f5f9;
`;

export const Card = styled.div`
  width: 80%;
  max-width: 22rem;
  height: 19rem;

  align-items: center;
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  background: #fdfdfd;
  box-shadow: 0px 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1``;

export const ProfileImg = styled.img`
  width: 58px;
  height: 56px;
`;

export const BoldTitle = styled.h1``;

export const UserInfo = styled.div`
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
