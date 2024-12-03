import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  position: relative;
`;

const Head = styled.div``;

const Foot = styled.div``;

// Christian Rudder ---------------------------
// Created skeleton, routing, head, main, and foot skeleton
// ----------------
function App() {
  return (
    <Router>
      <Head>
        <NavBar />
      </Head>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here */}
        </Routes>
        <Foot>{/* Footer component */}</Foot>
      </Main>
    </Router>
  );
}

export default App;
