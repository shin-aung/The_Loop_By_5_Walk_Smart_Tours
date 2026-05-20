import { useState } from "react";
import { Link } from "react-router-dom";

const TOTAL_PAGES = 11;

const pageTitles: Record<number, string> = {
  1: "Cover — The Loop by 5",
  2: "The Lane Edit · Haji Lane Guide",
  3: "Haji Lane · Step Outside, Learn Together",
  4: "Outdoor Activity Programme",
  5: "Activities & Visual Story",
  6: "Cultural Photography",
  7: "Walk Smart Tour Experience",
  8: "Tour Reflections",
  9: "Student Moments",
  10: "Team Members",
  11: "Thank You · Free Walking Tours",
};

export default function NewsletterOnlinePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [imgZoomed, setImgZoomed] = useState(false);

  const goTo = (page: number) => {
    if (page >= 1 && page <= TOTAL_PAGES) {
      setCurrentPage(page);
      setImgZoomed(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pageImg = `/media/images/newsletter/page-${String(currentPage).padStart(2, "0")}.jpg`;

  return (
    <main style={{ paddingTop: "var(--nav-height)", background: "var(--dark-brown)", minHeight: "100vh" }}>

      {/* Top bar */}
      <div style={{
        background: "rgba(0,0,0,0.4)",
        borderBottom: "1px solid rgba(200,155,90,0.2)",
        padding: "0.875rem 0",
      }}>
        <div className="container" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link to="/newsletter" style={{
              fontSize: "0.82rem", color: "rgba(255,255,255,0.5)",
              display: "flex", alignItems: "center", gap: "0.4rem", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              ← Newsletter
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)" }}>
              The Loop by 5 · May 2026 Limited Edition
            </span>
          </div>
          <a
            href="/media/documents/newsletter.pdf"
            download="The_Loop_by_5_Newsletter_May2026.pdf"
            style={{
              fontSize: "0.8rem", fontWeight: 600, color: "var(--gold-accent)",
              display: "flex", alignItems: "center", gap: "0.4rem",
              border: "1px solid rgba(200,155,90,0.35)", padding: "0.4rem 1rem",
              borderRadius: "50px", transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(200,155,90,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            📥 Download PDF
          </a>
        </div>
      </div>

      {/* Page display */}
      <div className="container" style={{ padding: "2rem var(--container-px)" }}>

        {/* Page title */}
        <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--gold-accent)",
          }}>
            Page {currentPage} of {TOTAL_PAGES}
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "1.1rem",
            color: "var(--white)", marginTop: "0.25rem",
          }}>
            {pageTitles[currentPage]}
          </h2>
        </div>

        {/* Main page image */}
        <div style={{
          maxWidth: "700px", margin: "0 auto", position: "relative",
        }}>
          <div
            onClick={() => setImgZoomed(v => !v)}
            style={{
              cursor: "zoom-in",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              transition: "transform 0.3s",
              transform: imgZoomed ? "scale(1.02)" : "scale(1)",
            }}
          >
            <img
              src={pageImg}
              alt={`Newsletter page ${currentPage}: ${pageTitles[currentPage]}`}
              style={{ width: "100%", display: "block" }}
            />
          </div>

          {imgZoomed && (
            <div style={{
              position: "absolute", top: "0.75rem", right: "0.75rem",
              background: "rgba(0,0,0,0.6)", color: "white",
              padding: "0.3rem 0.7rem", borderRadius: "50px", fontSize: "0.72rem",
            }}>
              Click to zoom out
            </div>
          )}
        </div>

        {/* Navigation controls */}
        <div style={{
          maxWidth: "700px", margin: "1.5rem auto 0",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
        }}>
          <button
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn"
            style={{
              background: currentPage === 1 ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.1)",
              color: currentPage === 1 ? "rgba(255,255,255,0.25)" : "var(--white)",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              minWidth: "120px", justifyContent: "center",
            }}
          >
            ← Previous
          </button>

          {/* Page dots */}
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "center" }}>
            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(pg => (
              <button
                key={pg}
                onClick={() => goTo(pg)}
                title={`Page ${pg}: ${pageTitles[pg]}`}
                style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  border: pg === currentPage ? "2px solid var(--gold-accent)" : "1px solid rgba(255,255,255,0.2)",
                  background: pg === currentPage ? "var(--gold-accent)" : "transparent",
                  color: pg === currentPage ? "var(--dark-brown)" : "rgba(255,255,255,0.6)",
                  fontSize: "0.75rem", fontWeight: 600,
                  cursor: "pointer", transition: "all 0.2s",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {pg}
              </button>
            ))}
          </div>

          <button
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === TOTAL_PAGES}
            className="btn"
            style={{
              background: currentPage === TOTAL_PAGES ? "rgba(255,255,255,0.05)" : "var(--gold-accent)",
              color: currentPage === TOTAL_PAGES ? "rgba(255,255,255,0.25)" : "var(--dark-brown)",
              border: "1px solid rgba(200,155,90,0.3)",
              cursor: currentPage === TOTAL_PAGES ? "not-allowed" : "pointer",
              minWidth: "120px", justifyContent: "center", fontWeight: 600,
            }}
          >
            Next →
          </button>
        </div>

        {/* Page thumbnail strip */}
        <div style={{
          maxWidth: "700px", margin: "2.5rem auto 0",
          borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem",
        }}>
          <p style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
            marginBottom: "1rem", textAlign: "center",
          }}>
            All Pages
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
            gap: "0.625rem",
          }}>
            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(pg => (
              <button
                key={pg}
                onClick={() => goTo(pg)}
                title={pageTitles[pg]}
                style={{
                  padding: 0, border: "none", background: "none", cursor: "pointer",
                  borderRadius: "6px", overflow: "hidden",
                  outline: pg === currentPage ? "2px solid var(--gold-accent)" : "2px solid transparent",
                  outlineOffset: "2px",
                  opacity: pg === currentPage ? 1 : 0.55,
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = pg === currentPage ? "1" : "0.55")}
              >
                <img
                  src={`/media/images/newsletter/page-${String(pg).padStart(2, "0")}.jpg`}
                  alt={`Page ${pg}`}
                  style={{ width: "100%", display: "block" }}
                />
                <div style={{
                  padding: "0.25rem",
                  background: pg === currentPage ? "var(--gold-accent)" : "rgba(255,255,255,0.08)",
                  fontSize: "0.65rem", fontWeight: 600, textAlign: "center",
                  color: pg === currentPage ? "var(--dark-brown)" : "rgba(255,255,255,0.5)",
                }}>
                  {pg}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom actions */}
        <div style={{
          maxWidth: "700px", margin: "2.5rem auto 0",
          display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem",
        }}>
          <a
            href="/media/documents/newsletter.pdf"
            download="The_Loop_by_5_Newsletter_May2026.pdf"
            className="btn btn-gold"
          >
            📥 Download Full PDF
          </a>
          <Link to="/newsletter" className="btn btn-outline-white">
            ← Back to Newsletter
          </Link>
          <Link to="/tours" className="btn btn-outline-white">
            Explore Tours
          </Link>
        </div>

      </div>
    </main>
  );
}
