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
  Card,
  Text,
  Button,
} from "../components/styles/amiibo-styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
`;

const Title = styled(Header)`
  font-size: 3rem; 
  margin-bottom: 1.5rem;
  color: #1f2937; 
`;

const Highlight = styled.span`
  color: #3b82f6; 
  font-weight: bold;
`;

const Description = styled(Text)`
  font-size: 1.125rem; 
  color: #4b5563; 
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)`
  background-color: #3b82f6; 
  padding: 0.75rem 1.5rem; 
  border-radius: 0.5rem;
  font-size: 1.125rem;  
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb; 
  }
`;
// Christian Rudder ---------------------------
// added basic layout, (Welcome, Bubble, Card, Text, Button)
const HomePage = () => {
  return (
    <Container>
      <Content>
        <Card>
        <Title>
          Welcome to <Highlight>Amiibo Finder</Highlight>
        </Title>
        <Description>
          Discover your favorite Amiibo characters, view their details, and explore a wide variety of options!
        </Description>
        <StyledButton href="/list">Explore Now</StyledButton>
        </Card>
      </Content>
    </Container>
  );
};

export default HomePage;
