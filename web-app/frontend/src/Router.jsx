import { Routes, Route } from "react-router-dom";
import Homepage from './pages/App.jsx'
import Viewer from './pages/Viewer.jsx'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/viewer/:name" element={<Viewer />} />
    </Routes>
  );
}

export default Router;