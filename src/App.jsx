import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Route, Routes } from "react-router";
import { Layout } from "./componets/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/info" element={<h1>Info</h1>} />
        <Route path="*" element={<h1>Not Found PAGE</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
