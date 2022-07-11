import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutPage from "./pages/AboutPage";
import WritePage from "./pages/WritePage";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/auth" element={<LoginPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
