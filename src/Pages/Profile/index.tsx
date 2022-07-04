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
  BoldTitle,
  UserInfo,
} from "./style";

interface User {
  avatar: {
    image_high_url: string;
  };
  name: string;
  last_name: string;
  email: string;
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

        <Title>Your </Title>
        <BoldTitle>Name</BoldTitle>

        <UserInfo>{`${user.name} ${user.last_name}`}</UserInfo>

        <Title>Your </Title>
        <BoldTitle>E-mail</BoldTitle>

        <UserInfo>{user.email}</UserInfo>
      </Card>
    </Container>
  );
}
