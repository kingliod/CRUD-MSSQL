import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import SecondPage from "./pages/SecondPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
