// 15.Authentication and Protected Routes
import { useNavigate } from "react-router-dom";
import { useAuth } from "./15.1.Auth";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <div>
      <div>Welcome {auth.user}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
