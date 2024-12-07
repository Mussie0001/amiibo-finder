import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AmiiboListPage from "./pages/AmiiboListPage";
import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";
import AmiiboDetailPage from "./pages/AmiiboDetailPage";

function AppContent() {
  const location = useLocation(); // Use inside the Router context

  // Apply "container" class only for the AmiiboList page
  const isAmiiboListView = location.pathname === "/list";
  const isAmiiboSearchView = location.pathname === "/search";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${(isAmiiboListView || isAmiiboSearchView) ? "container mx-auto mt-8 mb-8" : ""}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<AmiiboListPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:name" element={<AmiiboDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;