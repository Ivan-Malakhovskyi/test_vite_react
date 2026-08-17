import "./App.css";
import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";

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
