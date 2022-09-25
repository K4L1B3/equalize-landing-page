import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
