
import styled from "styled-components";
// reusable styled components for the app

// Christian Rudder ---------------------------
// Some may or may not be used in the final version of the project
const Header = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #333;
  font-family: "Comic Sans MS";
`;

const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 2px solid black;
`;

const Text = styled.p`
  font-family: "Comic Sans MS";
  color: #333;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const Button = styled.a<{ bgColor?: string; hoverColor?: string }>`
    background-color: ${({ bgColor }) => bgColor || "#3b82f6"};
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    margin-top: 1rem;
    transition: background-color 0.2s;
    font-family: "Comic Sans MS";

    &:hover {
        background-color: ${({ hoverColor }) => hoverColor || "#2563eb"};
    }
`;
// Christian Rudder ---------------------------

export { Header, Card, Text, Button };