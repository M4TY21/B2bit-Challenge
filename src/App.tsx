import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";

export function App() {
  const token = localStorage.getItem("token");

  return <>{token ? <Profile /> : <Home />}</>;
}
