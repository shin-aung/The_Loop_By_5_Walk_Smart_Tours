import { Link } from "react-router-dom";
import TourCard from "../components/TourCard";
import SectionTitle from "../components/SectionTitle";
import { tours } from "../data/tours";
import { achievements } from "../data/achievements";

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #320000 0%, #543004 60%, #7a4a10 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "var(--nav-height)",
        }}
      >
        {/* Decorative pattern */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(200,155,90,0.12) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(200,155,90,0.08) 0%, transparent 50%)`,
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "700px" }}>
            <span
              className="fade-in"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.875rem",
                marginBottom: "1.25rem",
              }}
            >
              <img
                src="/media/images/logo.png"
                alt="The Loop by 5 logo"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: "2px solid rgba(200,155,90,0.5)",
                  objectFit: "cover",
                }}
              />
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold-accent)",
              }}>
                PGDM Group 5 · Corporate Communication · May 2026
              </span>
            </span>

            <h1
              className="fade-in fade-in--delay-1"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.75rem, 7vw, 5rem)",
                fontWeight: 700,
                color: "var(--white)",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              The Loop
              <br />
              <em style={{ color: "var(--gold-accent)", fontStyle: "italic" }}>by 5</em>
            </h1>

            <p
              className="fade-in fade-in--delay-2"
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.75)",
                marginBottom: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.03em",
              }}
            >
              Walk Smart Tours for Students
            </p>

            <p
              className="fade-in fade-in--delay-3"
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.6)",
                maxWidth: "520px",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              Free educational walking tours that help students explore, learn, and connect
              with Singapore's vibrant culture, art, heritage, and architecture — beyond the classroom.
            </p>

            <div
              className="fade-in fade-in--delay-4"
              style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}
            >
              <Link to="/tours" className="btn btn-gold">
                Explore Tours →
              </Link>
              <Link to="/team" className="btn btn-outline-white">
                Meet the Team
              </Link>
              <Link to="/newsletter" className="btn btn-outline-white">
                Newsletter
              </Link>
              <Link to="/achievements" className="btn btn-outline-white">
                Achievements
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span>Scroll</span>
          <span style={{ fontSize: "1rem" }}>↓</span>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: "var(--dark-brown)", padding: "2rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
              textAlign: "center",
            }}
          >
            {[
              { value: "9", label: "Free Tours" },
              { value: "3", label: "Nations" },
              { value: "1", label: "Newsletter" },
              { value: "0$", label: "Cost to Join" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--gold-accent)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: "0.2rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="section section--beige">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "4rem" }}>
            <div>
              <SectionTitle
                eyebrow="Who We Are"
                heading="Students Learning Beyond the Classroom"
                subtitle="The Loop by 5 is a student brand built by five PGDM Group 5 students passionate about Corporate Communication and cultural learning."
              />
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                We created Walk Smart Tours to make education more interactive — turning
                Singapore's streets, landmarks, and heritage districts into living classrooms.
                Our five free walking tours explore technology, art, heritage, sustainability,
                and architecture across the city.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
                Our team brings together students from Myanmar, India, and Sri Lanka — united
                by creativity, communication, and a passion for cultural learning.
              </p>
              <Link to="/about" className="btn btn-primary">
                Our Brand Story →
              </Link>
            </div>

            <div>
              <div
                style={{
                  background: "linear-gradient(135deg, var(--dark-brown), var(--warm-brown))",
                  borderRadius: "var(--radius-lg)",
                  padding: "2.5rem",
                  color: "var(--white)",
                }}
              >
                <div style={{ marginBottom: "1.75rem" }}>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--gold-accent)",
                      marginBottom: "0.5rem",
                      fontWeight: 600,
                    }}
                  >
                    Our Mission
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "1rem" }}>
                    Help students learn beyond the classroom through real cultural experiences.
                  </p>
                </div>

                {[
                  "🎨 Art, Creativity & Cultural Heritage",
                  "🏛️ Architecture & Urban Design",
                  "🌿 Sustainability & Retail",
                  "💻 Technology & Smart City",
                  "🕌 Heritage & Community",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "0.7rem 0",
                      borderTop: "1px solid rgba(255,255,255,0.1)",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOURS ── */}
      <section className="section section--white">
        <div className="container">
          <SectionTitle
            eyebrow="Walk Smart Tours"
            heading="Explore Singapore with Us"
            subtitle="Five free student-led walking tours exploring culture, art, architecture, heritage, and innovation."
            center
          />
          <div className="grid-3" style={{ marginBottom: "2.5rem" }}>
            {tours.slice(0, 3).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/tours" className="btn btn-primary">
              View All 5 Tours →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS STRIP ── */}
      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            eyebrow="What We've Achieved"
            heading="Milestones & Impact"
            subtitle="Major achievements by The Loop by 5 — PGDM Group 5."
            center
          />
          <div className="grid-4">
            {achievements.map((a) => (
              <div
                key={a.id}
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(200,155,90,0.2)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{a.icon}</div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--gold-accent)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {a.value}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {a.title}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/achievements" className="btn btn-gold">
              See Full Achievements →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--beige">
        <div className="container" style={{ textAlign: "center" }}>
          <SectionTitle
            eyebrow="Join Us"
            heading="Ready to Walk Smart?"
            subtitle="All tours are free and open to all PGDM students. No booking required — just show up and explore."
            center
          />
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link to="/tours" className="btn btn-primary">Explore All Tours</Link>
            <Link to="/newsletter" className="btn btn-secondary">Read Newsletter</Link>
            <Link to="/team" className="btn btn-secondary">Meet the Team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
