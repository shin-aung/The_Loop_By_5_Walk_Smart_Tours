import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ToursPage from "./pages/ToursPage";
import TourDetailsPage from "./pages/TourDetailsPage";
import NewsletterPage from "./pages/NewsletterPage";
import NewsletterOnlinePage from "./pages/NewsletterOnlinePage";
import AchievementsPage from "./pages/AchievementsPage";
import FuturePage from "./pages/FuturePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/tours/:tourSlug" element={<TourDetailsPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/newsletter/loop_by_5" element={<NewsletterOnlinePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/future" element={<FuturePage />} />
        <Route
          path="*"
          element={
            <main style={{ paddingTop: "var(--nav-height)" }}>
              <div className="not-found">
                <div>
                  <span className="not-found__icon">🔍</span>
                  <h1 className="not-found__title">Page Not Found</h1>
                  <p className="not-found__text">
                    The page you are looking for doesn't exist.
                  </p>
                  <a href="/" className="btn btn-primary">
                    ← Back to Home
                  </a>
                </div>
              </div>
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
