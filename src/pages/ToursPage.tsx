import SectionTitle from "../components/SectionTitle";
import TourCard from "../components/TourCard";
import { tours } from "../data/tours";

export default function ToursPage() {
  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Walk Smart Tours</span>
            <h1 className="page-hero__title">Free Walking Tours</h1>
            <p className="page-hero__description">
              Five student-led free walking tours exploring Singapore's culture,
              art, architecture, heritage, sustainability, and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div style={{ background: "var(--gold-accent)", padding: "1rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {[
              { icon: "🆓", text: "All tours are free" },
              { icon: "🎓", text: "Open to all PGDM students" },
              { icon: "🗺️", text: "Student-led guided walks" },
              { icon: "📍", text: "Across Singapore" },
            ].map((item) => (
              <span
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--dark-brown)",
                }}
              >
                <span>{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <section className="section section--white">
        <div className="container">
          <SectionTitle
            eyebrow="Our Tours"
            heading="All Walk Smart Tours"
            subtitle="Click 'See More' on any tour to explore full details, highlights, and learning objectives."
            center
          />
          <div className="grid-3">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section section--beige">
        <div className="container" style={{ textAlign: "center" }}>
          <div
            style={{
              maxWidth: "640px",
              margin: "0 auto",
              padding: "2.5rem",
              background: "var(--white)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-light)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📋</div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                color: "var(--dark-brown)",
                marginBottom: "0.75rem",
              }}
            >
              About These Tours
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
              All Walk Smart Tours are created and led by PGDM Group 5 students as part of the
              Corporate Communication module at ACETEK College. Tours are free, student-friendly,
              and designed to help you experience Singapore beyond the classroom.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
