import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutPage from "./pages/AboutPage";
import WritePage from "./pages/WritePage";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetYourPasswordPage from "./pages/ResetYourPasswordPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/resetPassword/:id" element={<ResetYourPasswordPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
