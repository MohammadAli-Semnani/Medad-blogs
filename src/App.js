
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import AuthorPage from "./components/author/AuthorPage";
import BlogPage from "./components/blogs/BlogPage";
import ScrollToTop from "./helpers/ScrollToTop";


function App() {
  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/blogs/:slug" element={<BlogPage />} />  
        <Route path="/authors/:slug" element={<AuthorPage />} />  
      </Routes>
    </Layout>
  );
}

export default App;
