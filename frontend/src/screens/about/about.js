import { Container } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";


const About = () => {
  return (
    <MainScreen title="About Cyber Note">
      <Container>
        <h2>About Cyber Note</h2>
        <p>
          Cyber Note is a simple and intuitive note-taking application designed to help you organize and manage your thoughts, ideas, and tasks effectively. Whether you're a student, professional, or anyone in between, Cyber Note offers a user-friendly platform for capturing, storing, and accessing your notes anytime, anywhere.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>Create and edit notes with ease</li>
          <li>Organize notes by categories</li>
          <li>Preview notes in markdown format</li>
          <li>Secure user authentication and profile management</li>
          <li>Responsive design for seamless user experience across devices</li>
        </ul>
        <h3>Get Started:</h3>
        <p>
          Ready to boost your productivity with Cyber Note? Sign up or log in now to start taking better notes and stay organized!
        </p>
      </Container>
    </MainScreen>
  );
};

export default About;
