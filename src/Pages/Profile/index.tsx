import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { fetchUserInfo } from "../../services/api";

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

interface User {
  name: string;
  last_name: string;
  email: string;

  avatar: {
    image_high_url: string;
  };
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User);

  const navigation = useNavigate();

  async function handleFetchProfile() {
    const response = await fetchUserInfo();
    console.log(response);
    setUser(response);
  }

  function handleLogout() {
    localStorage.clear();
    navigation("/");
  }

  useEffect(() => {
    handleFetchProfile();
  }, []);

  return (
    <Container>
      <Header>
        <Button onClick={handleLogout}>Logout</Button>
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
