import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const futureGoals = [
  {
    icon: "🗺️",
    title: "More Free Walking Tours",
    desc: "Add more Walk Smart Tours covering new themes and locations across Singapore — including food culture, performing arts, and innovation districts.",
  },
  {
    icon: "🎓",
    title: "Support International Students",
    desc: "Continue designing tours specifically to welcome and support new international students, helping them settle into Singapore through cultural exploration.",
  },
  {
    icon: "📱",
    title: "Digital Tour Guides",
    desc: "Develop digital and interactive tour guides with maps, audio narration, and QR code stops to make the walks more engaging and self-directed.",
  },
  {
    icon: "📍",
    title: "Maps & Route Details",
    desc: "Add interactive maps and detailed route information for each tour, making navigation simple for all students.",
  },
  {
    icon: "📰",
    title: "More Newsletters",
    desc: "Publish future editions of The Loop by 5 newsletter covering more tours, student stories, and cultural highlights from Singapore.",
  },
  {
    icon: "✍️",
    title: "Student Reflections",
    desc: "Create a platform for student stories, tour reflections, and cultural observations — building a community of curious learners.",
  },
  {
    icon: "🌐",
    title: "Stronger Online Presence",
    desc: "Build a stronger digital brand — growing the website, social media, and sharing The Loop by 5 story with students across ASEAN.",
  },
  {
    icon: "🤝",
    title: "Wider Community Impact",
    desc: "Partner with cultural institutions, heritage sites, and student organisations in Singapore to broaden the reach of Walk Smart Tours.",
  },
];

export default function FuturePage() {
  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Where We're Headed</span>
            <h1 className="page-hero__title">Future Goals</h1>
            <p className="page-hero__description">
              The Loop by 5 is just getting started. Here's where we're headed —
              more tours, more stories, and a wider community impact.
            </p>
          </div>
        </div>
      </div>

      {/* Vision statement */}
      <section className="section section--beige">
        <div className="container">
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontSize: "3rem",
                display: "block",
                marginBottom: "1.5rem",
              }}
            >
              🔭
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--dark-brown)",
                lineHeight: 1.35,
                marginBottom: "1.5rem",
              }}
            >
              Building a learning community where students explore Singapore's
              culture beyond the classroom.
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                maxWidth: "580px",
                margin: "0 auto",
              }}
            >
              The Loop by 5 started as a Corporate Communication project, but our
              vision is bigger. We believe student-led cultural exploration can become
              a lasting part of the PGDM experience — and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Goals grid */}
      <section className="section section--white">
        <div className="container">
          <SectionTitle
            eyebrow="Our Roadmap"
            heading="What's Coming Next"
            subtitle="Eight goals that will shape the next chapter of The Loop by 5."
            center
          />
          <div className="grid-4">
            {futureGoals.map((goal) => (
              <div
                key={goal.title}
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border-light)",
                  background: "var(--white)",
                  transition: "var(--transition)",
                }}
                className="card"
              >
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "0.875rem",
                    display: "block",
                  }}
                >
                  {goal.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: "var(--dark-brown)",
                    marginBottom: "0.625rem",
                    lineHeight: 1.3,
                  }}
                >
                  {goal.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.825rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <SectionTitle
            eyebrow="The Journey Continues"
            heading="Walk Smart, Learn More"
            center
          />
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "580px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.75,
            }}
          >
            Whether you're a student, a lecturer, or someone who loves Singapore —
            follow The Loop by 5 as we grow our walks, stories, and community.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Link to="/tours" className="btn btn-gold">
              Explore Our Tours →
            </Link>
            <Link to="/about" className="btn btn-outline-white">
              Our Brand Story
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
