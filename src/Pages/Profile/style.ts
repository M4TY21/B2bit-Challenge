import styled from "styled-components";

export const Header = styled.header`
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
  height: 20rem;

  align-items: center;
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  background: #fdfdfd;
  box-shadow: 0px 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-family: "Nunito";
  font-weight: 600;
  font-size: 0.75rem;
  color: #2f2f2f;
  margin-top: 1.8rem;
`;

export const ProfileImg = styled.img`
  width: 58px;
  height: 56px;
  border-radius: 0.5rem;
  margin-top: 0.8rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
  width: 83%;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;

  font-size: 0.8rem;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
`;

export const BoldContent = styled.p`
  padding-left: 0.25rem;
  font-weight: 700;
`;

export const UserInfo = styled.div`
  display: flex;
  background: #f4f4f4;
  height: 3rem;
  padding-left: 1rem;
  justify-content: start;
  align-items: center;
  margin-bottom: 1.25rem;

  border: 0px;
  border-radius: 0.5rem;

  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: #262626;
`;
