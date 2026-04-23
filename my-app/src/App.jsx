import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import FavoriteColor from "./components/button";
import Form from "./pages/signup";
import Leaderboard from "./pages/leaderboard";
import ListGroup from "./pages/ListGroup";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/button" element={<FavoriteColor />} />
        <Route path="/form" element={<Form />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/ListGroup" element={<ListGroup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;