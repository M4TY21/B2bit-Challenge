import { useEffect } from "react";

import { useAuth } from "../../Hooks/auth";

import {
  Header,
  Button,
  Container,
  Card,
  Title,
  ProfileImg,
  Content,
  BoldContent,
  UserInfo,
  UserInfoContainer,
} from "./style";

export function Profile() {
  const { user, fetchUserInfo, signOut } = useAuth();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Container>
      <Header>
        <Button onClick={signOut}>Logout</Button>
      </Header>
      <Card>
        <Title>Profile picture</Title>

        <ProfileImg
          src={user.avatar.image_high_url}
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
    </Container>
  );
}
