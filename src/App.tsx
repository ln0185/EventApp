import NavBar from "./components/navbar/navbar";
import { HashRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import { Home } from "./pages/Home.tsx";
import { CreateEventPage } from "./pages/CreateEventPage.tsx";
import { ProfilePage } from "./pages/ProfilePage.tsx";

function App() {
  return (
    <div className="h-full relative">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" />
          <Route path="/CreateEvent" element={<CreateEventPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        {/* Fixed Navbar */}
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
