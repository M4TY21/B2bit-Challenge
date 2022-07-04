import { useEffect, useState } from "react";
import { fetchUserInfo } from "../../services/api";
import { Header, Button, Container, Card, Title } from "./style";

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

  async function handleFetchProfile() {
    const response = await fetchUserInfo();
    console.log(response);
    setUser(response);
  }

  function handleLogout() {
    localStorage.clear();
  }

  useEffect(() => {
    handleFetchProfile();
  }, []);

  return (
    <>
      <Header>
        <Button onClick={handleLogout}>Logout</Button>
      </Header>
      <Container>
        <Card>
          <Title>{user.name}</Title>
        </Card>
      </Container>
    </>
  );
}
