import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import DMI from "./components/DMI";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dmi" element={<DMI />} />
    </Routes>
  );
}
