import { Routes, Route } from "react-router-dom";
import App from './pages/App.jsx'
import NewProject from "./pages/NewProject.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/NewProject" element={<NewProject />} />
    </Routes>
  );
}

export default App;