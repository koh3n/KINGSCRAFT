import { Routes, Route } from "react-router-dom";
import App from './pages/App.jsx'
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default App;