import styled from 'styled-components';

// Jood Alasiri
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const SlayCont = styled.div`
  max-width: 65%;
  padding: 5%;
  background-color: white; /* White box around the content */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  border: 1px solid #e5e7eb; /* Subtle border for definition */
`;

const StyledHeader = styled.h1`
  font-size: calc(3px + 5vh); 
  font-weight: bold;
  color: #1f2937; 
  margin-bottom: 5%; 
  text-align: center;
  font-family: 'Comic Sans MS', sans-serif;

  span {
    color: #3b82f6;
  }
`;

const StyledParagraph = styled.p`
  color: dimgrey; 
  margin-bottom: 2%; 
  line-height: 1.75; /* Tailwind's leading-relaxed */
  font-family: 'Comic Sans MS', sans-serif;

  &.mt-6 {
    margin-top: 1.5rem; /* Tailwind's mt-6 */
  }
`;

const StyledList = styled.ul`
  color: dimgrey; 
  font-family: 'Comic Sans MS', sans-serif;
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 2%; 
  }
`;

export default function AboutPage() {
  return (
      <PageWrapper>
        <SlayCont>
          <StyledHeader>
            About <span>Amiibo Finder</span>
          </StyledHeader>
          <StyledParagraph>
            Amiibo Finder is a web application designed to help you discover, search, and explore Amiibo cards and figures
            easily. Using the powerful AmiiboAPI, this app provides up-to-date information about your favorite characters
            from games like Mario, Zelda, and more.
          </StyledParagraph>
          <StyledList>
            <li>🌟 Search for Amiibos by name</li>
            <li>🌟 View detailed information about each Amiibo</li>
            <li>🌟 Refresh for randomized character exploration</li>
          </StyledList>
          <StyledParagraph className="mt-6">
            Built using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>.
          </StyledParagraph>
        </SlayCont>
      </PageWrapper>
  );
}
