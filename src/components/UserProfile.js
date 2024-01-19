import classes from "./UserProfile.module.css";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const userEmail = useSelector((state) => state.auth.email);

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      {userEmail && <h3>{userEmail}</h3>}
    </main>
  );
};

export default UserProfile;
