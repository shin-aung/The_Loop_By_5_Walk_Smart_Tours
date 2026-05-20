import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/teamMembers";

export default function TeamPage() {
  const portfolioCount = teamMembers.filter((m) => m.portfolioUrl).length;

  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Our People</span>
            <h1 className="page-hero__title">Meet the Team</h1>
            <p className="page-hero__description">
              Five students from Myanmar, India, and Sri Lanka — united by creativity,
              communication, and a passion for cultural learning in Singapore.
            </p>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div style={{ background: "var(--gold-accent)", padding: "1rem 0" }}>
        <div className="container">
          <div style={{
            display: "flex", justifyContent: "center",
            flexWrap: "wrap", gap: "2rem", alignItems: "center",
          }}>
            {[
              { icon: "🌏", text: "5 Members · 3 Countries" },
              { icon: "🎓", text: "PGDM Group 5 · ACETEK College" },
              { icon: `🔗`, text: `${portfolioCount} Portfolios Available` },
              { icon: "📸", text: "Tap 'About Me' on any card" },
            ].map((item) => (
              <span key={item.text} style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                fontSize: "0.875rem", fontWeight: 600, color: "var(--dark-brown)",
              }}>
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Team grid */}
      <section className="section section--white">
        <div className="container">
          <SectionTitle
            eyebrow="PGDM Group 5"
            heading="The Faces Behind The Loop"
            subtitle="Each member leads a unique tour focus area. View their About Me, scan the QR code, or click to visit their portfolio."
            center
          />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.75rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}>
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Instruction hint */}
          <p style={{
            textAlign: "center", marginTop: "2rem",
            fontSize: "0.82rem", color: "var(--text-muted)", fontStyle: "italic",
          }}>
            Hover over any card and click <strong style={{ color: "var(--dark-brown)" }}>About Me ✦</strong> to view the full profile poster.
            The QR code is scannable with your phone camera and links directly to the portfolio.
          </p>
        </div>
      </section>

      {/* Diversity section */}
      <section className="section section--dark">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "4rem" }}>
            <div>
              <SectionTitle eyebrow="Our Diversity" heading="3 Nations, 1 Mission" />
              <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Our cultural differences became our greatest strength. Coming from Myanmar,
                India, and Sri Lanka, we bring unique perspectives to every tour concept,
                design decision, and communication strategy.
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}>
                We designed Walk Smart Tours to welcome and support international students —
                helping newcomers explore Singapore with friends from the very first week.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { flag: "🇲🇲", country: "Myanmar", members: "Shin, Sandy & Aung", count: 3 },
                { flag: "🇮🇳", country: "India", members: "Shweta", count: 1 },
                { flag: "🇱🇰", country: "Sri Lanka", members: "Sathya", count: 1 },
              ].map((c) => (
                <div key={c.country} style={{
                  display: "flex", alignItems: "center", gap: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(200,155,90,0.2)",
                }}>
                  <span style={{ fontSize: "2.5rem", lineHeight: 1 }}>{c.flag}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--white)", fontWeight: 600 }}>
                      {c.country}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
                      {c.members}
                    </div>
                  </div>
                  <div style={{
                    marginLeft: "auto", fontFamily: "var(--font-display)",
                    fontSize: "1.75rem", fontWeight: 700, color: "var(--gold-accent)",
                  }}>
                    {c.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
