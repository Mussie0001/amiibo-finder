/**
 * HomePage Component
 *
 * This component represents the home page of the Amiibo Finder application.
 * It provides a welcoming interface with a title, description, and a call-to-action button
 * that navigates users to the list of Amiibo characters.
 *
 * The component uses Tailwind CSS for styling and applies custom font styles inline.
 *
 */

import styled from "styled-components";
import {
  Header,
  Bubble,
  Card,
  Text,
  Button,
} from "../components/styles/amiibo-styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
// Christian Rudder ---------------------------
// added basic layout, (Welcome, Bubble, Card, Text, Button)
const HomePage = () => {
  return (
    <Container>
      <Header>
        Welcome to <Bubble>Amiibo Finder</Bubble>
      </Header>
      <Card>
        <Text>
          Discover your favorite Amiibo characters, view their details, <br />{" "}
          and explore a wide variety of options!
        </Text>
        <Button href="/list">Explore Now</Button>
      </Card>
    </Container>
  );
};

export default HomePage;
