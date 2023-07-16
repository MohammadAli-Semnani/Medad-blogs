
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import AuthorPage from "./components/author/AuthorPage";
import BlogsPage from "./components/blogs/BlogsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/blogs/:slug" element={<BlogsPage />} />  
        <Route path="/authors/:slug" element={<AuthorPage />} />  
      </Routes>
    </Layout>
  );
}

export default App;
