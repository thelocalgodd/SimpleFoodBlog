import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRecipesPage from "./pages/AllRecipesPage";
import HomePage from "./pages/HomePage";
import SweetThingsPage from "./pages/SweetThingsPage";
import SaladsPage from "./pages/SaladsPage";
import VegetablesPage from "./pages/VegetablesPage";
import DinnerPage from "./pages/DinnerPage";
import AboutPage from "./pages/AboutPage";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<AllRecipesPage />} />
        <Route path="/salads" element={<SaladsPage />} />
        <Route path="/sweets" element={<SweetThingsPage />} />
        <Route path="/vegetables" element={<VegetablesPage />} />
        <Route path="/dinner" element={<DinnerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
