import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/teamMembers";

export default function TeamPage() {
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

      {/* Team Grid */}
      <section className="section section--white">
        <div className="container">
          <SectionTitle
            eyebrow="PGDM Group 5"
            heading="The Faces Behind The Loop"
            subtitle="Each team member leads a unique tour focus area, bringing their own cultural perspective and expertise."
            center
          />
          <div className="grid-3" style={{ maxWidth: "960px", margin: "0 auto" }}>
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Diversity section */}
      <section className="section section--dark">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "4rem" }}>
            <div>
              <SectionTitle
                eyebrow="Our Diversity"
                heading="3 Nations, 1 Mission"
              />
              <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Our cultural differences became our greatest strength. Coming from Myanmar,
                India, and Sri Lanka, we bring unique perspectives to every tour concept,
                design decision, and communication strategy.
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                We wanted to support international students who are new to Singapore by
                creating a friendly and comfortable learning experience — tours designed
                with new arrivals in mind.
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}>
                Through Walk Smart Tours, students can explore Singapore's free and iconic
                locations while learning together — regardless of where they come from.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { flag: "🇲🇲", country: "Myanmar", members: "Shin, Sandy & Aung", count: 3 },
                { flag: "🇮🇳", country: "India", members: "Shweta", count: 1 },
                { flag: "🇱🇰", country: "Sri Lanka", members: "Sathya", count: 1 },
              ].map((c) => (
                <div
                  key={c.country}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    padding: "1.25rem 1.5rem",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(200,155,90,0.2)",
                  }}
                >
                  <span style={{ fontSize: "2.5rem", lineHeight: 1 }}>{c.flag}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        color: "var(--white)",
                        fontWeight: 600,
                      }}
                    >
                      {c.country}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
                      {c.members}
                    </div>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "var(--gold-accent)",
                    }}
                  >
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
