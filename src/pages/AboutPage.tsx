import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const values = [
  {
    icon: "🎨",
    title: "Creativity",
    text: "The idea of making education more fun through outdoor experiences in Singapore.",
  },
  {
    icon: "❤️",
    title: "Passion",
    text: "A shared passion for creativity, communication, and cultural learning.",
  },
  {
    icon: "🤝",
    title: "Connection",
    text: "A common goal to connect students through Walk Smart Free Walking Tours.",
  },
  {
    icon: "🌏",
    title: "Diversity",
    text: "Students from Myanmar, India, and Sri Lanka — united by diversity and creativity.",
  },
  {
    icon: "📚",
    title: "Learning",
    text: "Turning Singapore's streets into living classrooms through real cultural experiences.",
  },
  {
    icon: "🆓",
    title: "Free & Open",
    text: "All tours are free, student-led, and open to every PGDM student at ACETEK College.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Our Brand Story</span>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1rem" }}>
              <img
                src="/media/images/logo.png"
                alt="The Loop by 5 logo"
                style={{
                  width: "72px", height: "72px",
                  borderRadius: "50%", objectFit: "cover",
                  border: "2px solid rgba(200,155,90,0.45)",
                  flexShrink: 0,
                }}
              />
              <h1 className="page-hero__title" style={{ marginBottom: 0 }}>About The Loop by 5</h1>
            </div>
            <p className="page-hero__description">
              Discover who we are, what brought us together, and why we created
              Walk Smart Free Walking Tours for students in Singapore.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "4rem" }}>
            <div>
              <SectionTitle
                eyebrow="Who We Are"
                heading="Group 5 Students, One Mission"
              />
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                The Loop by 5 is a student brand created by five PGDM Group 5 students for the
                Corporate Communication module at ACETEK College, Singapore. We are students
                passionate about communication, cultural learning, and creating meaningful
                experiences for fellow students.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Our team brings together students from Myanmar, India, and Sri Lanka — three
                different countries and cultures united by a shared passion for learning,
                creativity, and exploration.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>
                Together, we created five free Walk Smart Walking Tours to help students —
                especially new international students — explore Singapore's culture, art,
                heritage, architecture, and innovation outside the classroom.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Brand Name", value: "The Loop by 5" },
                { label: "Module", value: "Corporate Communication" },
                { label: "Group", value: "PGDM Group 5" },
                { label: "Lecturer", value: "Mr. Seow" },
                { label: "Date", value: "May 2026" },
                { label: "College", value: "ACETEK College, Singapore" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.875rem 1.25rem",
                    background: "var(--light-beige)",
                    borderRadius: "var(--radius-sm)",
                    borderLeft: "3px solid var(--gold-accent)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--dark-brown)",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="section section--beige">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "4rem" }}>
            <div
              style={{
                background: "linear-gradient(135deg, var(--dark-brown), var(--warm-brown))",
                borderRadius: "var(--radius-lg)",
                padding: "3rem 2.5rem",
                color: "var(--white)",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                }}
              >
                🌆
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--white)",
                  marginBottom: "1rem",
                }}
              >
                Why Singapore?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: "1rem" }}>
                Singapore's modern architecture, connected walkways, and cultural diversity
                inspired our Walk Smart Free Walking Tours.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                We explore Technology, Innovation, Art, Heritage, Sustainability, Architecture,
                and City Development — all across the city.
              </p>
            </div>

            <div>
              <SectionTitle
                eyebrow="Background"
                heading="How The Loop by 5 Was Born"
              />
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                The Loop by 5 was created by Corporate Communication students to make learning
                more interactive outside the classroom. We wanted students to enjoy fun and
                educational outdoor activities after lectures and indoor learning.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Singapore's rich diversity — modern skyscrapers next to century-old shophouses,
                street art beside heritage temples — became the perfect backdrop for our tours.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>
                Walk Smart Tours brings students from different backgrounds together to learn,
                connect, and experience Singapore's culture in real life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Brought Us Together */}
      <section className="section section--white">
        <div className="container">
          <SectionTitle
            eyebrow="What Brought Us Together"
            heading="Shared Values & Goals"
            subtitle="We came together through shared passions — creativity, communication, and the desire to make learning truly meaningful."
            center
          />
          <div className="grid-3">
            {values.map((val) => (
              <div
                key={val.title}
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border-light)",
                  background: "var(--white)",
                  transition: "var(--transition)",
                }}
                className="card"
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.875rem" }}>{val.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    color: "var(--dark-brown)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {val.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <SectionTitle
            eyebrow="Our Mission"
            heading="Learning Beyond the Classroom"
            center
          />
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "700px",
              margin: "0 auto 2rem",
              lineHeight: 1.75,
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
            }}
          >
            "To help students learn beyond the classroom through real cultural experiences
            — exploring Singapore's culture, art, architecture, heritage, technology, and
            sustainability through free guided walks."
          </p>
          <Link to="/tours" className="btn btn-gold">
            Discover Our Tours →
          </Link>
        </div>
      </section>
    </main>
  );
}
