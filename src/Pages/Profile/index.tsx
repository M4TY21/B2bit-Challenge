import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import {
  Container,
  Load,
  Header,
  Button,
  Card,
  Title,
  ProfileImg,
  Content,
  BoldContent,
  UserInfo,
  UserInfoContainer,
} from "./styles";

export function Profile() {
  const { user, loading, fetchUserInfo, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut();
    navigate("/");
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Container>
      {loading ? (
        <Load size={64} />
      ) : (
        <>
          <Header>
            <Button onClick={handleLogout}>Logout</Button>
          </Header>
          <Card>
            <Title>Profile picture</Title>

            <ProfileImg
              src={user.avatar?.image_high_url}
              alt={`Foto de perfil de ${user.name} ${user.last_name}`}
            />

            <UserInfoContainer>
              <Content>
                Your <BoldContent>Name</BoldContent>
              </Content>

              <UserInfo>{`${user.name} ${user.last_name}`}</UserInfo>

              <Content>
                Your <BoldContent>E-mail</BoldContent>
              </Content>

              <UserInfo>{user.email}</UserInfo>
            </UserInfoContainer>
          </Card>
        </>
      )}
    </Container>
  );
}
