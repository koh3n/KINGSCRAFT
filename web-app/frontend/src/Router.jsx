import { Routes, Route } from "react-router-dom";
import App from './pages/App.jsx'
import ThreeView from './pages/3DView.jsx'
import Rap from './pages/Rap.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/NewProject" element={<ThreeView />} />
      <Route path="/r" element={<Rap />} />
    </Routes>
  );
}

export default App;