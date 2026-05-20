import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import AchievementCard from "../components/AchievementCard";
import { achievements } from "../data/achievements";

export default function AchievementsPage() {
  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Our Impact</span>
            <h1 className="page-hero__title">What We Have Achieved</h1>
            <p className="page-hero__description">
              Milestones, impact, and moments that define The Loop by 5 —
              PGDM Group 5.
            </p>
          </div>
        </div>
      </div>

      {/* Achievement cards */}
      <section className="section section--white">
        <div className="container">
          <SectionTitle
            eyebrow="Milestones"
            heading="Our Achievements at a Glance"
            subtitle="Major impact delivered by The Loop by 5 through Walk Smart Free Walking Tours, a newsletter, and a website."
            center
          />
          <div className="grid-4">
            {achievements.map((a) => (
              <AchievementCard key={a.id} achievement={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed breakdown */}
      <section className="section section--beige">
        <div className="container">
          <SectionTitle
            eyebrow="Breakdown"
            heading="The Full Story"
            center
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "860px", margin: "0 auto" }}>
            {/* Tours */}
            <div
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem 2.5rem",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span style={{ fontSize: "2rem" }}>🗺️</span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      color: "var(--dark-brown)",
                    }}
                  >
                    5 Walk Smart Free Walking Tours
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Architecture · Heritage · Art & Culture
                  </p>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Five student-led walking tour concepts across Singapore — all free and open
                to every PGDM student. Each tour focuses on a unique theme, led by a team
                member with expertise in that area.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
                  "Haji Lane: The Lane Edit",
                  "Gardens by the Bay",
                  "Marina Bay Sands",
                  "Kampong Glam Heritage",
                  "Sustainability & Retail Walk",
                ].map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>

            {/* Team */}
            <div
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem 2.5rem",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span style={{ fontSize: "2rem" }}>🌏</span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      color: "var(--dark-brown)",
                    }}
                  >
                    3 Nations Represented
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Myanmar · India · Sri Lanka
                  </p>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                Shweta, Sandy, Aung, Shin & Sathya — 5 voices, one mission. Cultural
                diversity embedded into every tour concept and design. The team's
                international backgrounds made The Loop by 5 uniquely positioned to
                welcome new students from all backgrounds.
              </p>
            </div>

            {/* Newsletter */}
            <div
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem 2.5rem",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span style={{ fontSize: "2rem" }}>📰</span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      color: "var(--dark-brown)",
                    }}
                  >
                    1 Newsletter Published
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    May 2026 Limited Edition
                  </p>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                The May 2026 Limited Edition Newsletter features Haji Lane "The Lane Edit"
                — spotlighting street art, indie boutiques, and heritage cafés. Published
                with student stories, curated photography, and cultural insights.
                Distributed to all PGDM students at ACETEK College.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <SectionTitle
            eyebrow="Explore More"
            heading="See Our Work"
            center
          />
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link to="/tours" className="btn btn-gold">View All Tours →</Link>
            <Link to="/newsletter" className="btn btn-outline-white">Read Newsletter</Link>
            <Link to="/team" className="btn btn-outline-white">Meet the Team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
