import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About/about.jsx";
import RootAbout from "./pages/About/root.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import Home from "./pages/Home/home.jsx";
import Setting from "./pages/Setting/setting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />}>
          <Route index element={<RootAbout />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="home/:homeId"  element={<Home />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
