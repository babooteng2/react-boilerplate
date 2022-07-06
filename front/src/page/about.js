import { useAuth } from "../components/context/fakeAuthProvider";

const About = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>About</h1>
      <p>{user ? user.user_id : ""}</p>
    </div>
  );
};

export default About;
