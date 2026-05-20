import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

export default function NewsletterPage() {
  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">
              May 2026 · Limited Edition
            </span>
            <h1 className="page-hero__title">Our Newsletter</h1>
            <p className="page-hero__description">
              The Loop by 5 · May 2026 Limited Edition — featuring Haji Lane
              "The Lane Edit": street art, boutique culture, and heritage.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter content */}
      <section className="section section--white">
        <div className="container">
          <div
            className="grid-2"
            style={{ alignItems: "flex-start", gap: "3.5rem" }}
          >
            {/* Left: cover preview */}
            <div>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, var(--dark-brown) 0%, var(--warm-brown) 100%)",
                  borderRadius: "var(--radius-lg)",
                  padding: "3rem 2.5rem",
                  color: "var(--white)",
                  marginBottom: "1.5rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-30px",
                    right: "-30px",
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    background: "rgba(200,155,90,0.1)",
                  }}
                />
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold-accent)",
                    marginBottom: "1rem",
                  }}
                >
                  Limited Edition · May 2026
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    color: "var(--white)",
                    marginBottom: "0.5rem",
                    fontStyle: "italic",
                  }}
                >
                  The Lane Edit
                </h2>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.65)",
                    marginBottom: "2rem",
                  }}
                >
                  Haji Lane Feature Edition · 11 Pages
                </p>
                {[
                  "Street art, indie boutiques & heritage cafés",
                  "Student stories and personal reflections",
                  "Curated photography from the walk",
                  "Cultural insights and tour highlights",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.8)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <span
                      style={{ color: "var(--gold-accent)", flexShrink: 0 }}
                    >
                      ✦
                    </span>
                    {item}
                  </div>
                ))}
                <div
                  style={{
                    marginTop: "2rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  Distributed to all PGDM students at ACETEK College
                </div>
              </div>

              {/* Action buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                <a
                  href="/media/documents/newsletter.pdf"
                  download="The_Loop_by_5_Newsletter_May2026.pdf"
                  className="btn btn-primary"
                  style={{ justifyContent: "center" }}
                >
                  📥 Download Newsletter PDF
                </a>
                <Link
                  to="/newsletter/loop_by_5"
                  className="btn btn-gold"
                  style={{ justifyContent: "center" }}
                >
                  🔍 View Pages of Newsletter →
                </Link>
                <a
                  href="https://corporate-communication-group-5-haj.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: "center" }}
                >
                  🔍 View Online Version →
                </a>
              </div>
            </div>

            {/* Right: details */}
            <div>
              <SectionTitle
                eyebrow="Newsletter"
                heading="May 2026 Limited Edition"
              />
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                }}
              >
                The Loop by 5 published its first Limited Edition Newsletter in
                May 2026, spotlighting the Haji Lane "The Lane Edit" walking
                tour. Across 11 beautifully designed pages, the newsletter
                captures the sights, stories, and cultural richness of one of
                Singapore's most creative streets.
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                }}
              >
                Distributed to all PGDM students at ACETEK College — featuring
                student stories, curated photography, and cultural insights from
                our Walk Smart Free Walking Tours.
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--dark-brown)",
                  marginBottom: "1.25rem",
                }}
              >
                What's Inside
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                  marginBottom: "2rem",
                }}
              >
                {[
                  {
                    icon: "🎨",
                    title: "The Lane Edit Feature",
                    desc: "A spotlight on Haji Lane: street art, indie boutiques & heritage cafés of Kampong Glam.",
                  },
                  {
                    icon: "✍️",
                    title: "Student Stories",
                    desc: "Personal reflections and experiences from the Haji Lane tour by our team members.",
                  },
                  {
                    icon: "📸",
                    title: "Curated Photography",
                    desc: "Artistic photos captured during the Walk Smart tour of Haji Lane.",
                  },
                  {
                    icon: "🗺️",
                    title: "Tour Highlights",
                    desc: "Key stops, cultural insights, and recommendations from The Lane Edit walking tour.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "1rem 1.25rem",
                      background: "var(--light-beige)",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>
                      {item.icon}
                    </span>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: "var(--dark-brown)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.55,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: "1.25rem",
                  background: "var(--light-beige)",
                  borderRadius: "var(--radius-sm)",
                  borderLeft: "3px solid var(--gold-accent)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: "var(--dark-brown)" }}>
                    📋 Pages:
                  </strong>{" "}
                  11 pages ·
                  <strong style={{ color: "var(--dark-brown)" }}>
                    {" "}
                    Format:
                  </strong>{" "}
                  A4 PDF ·
                  <strong style={{ color: "var(--dark-brown)" }}>
                    {" "}
                    Author:
                  </strong>{" "}
                  Shweta Suryavanshi ·
                  <strong style={{ color: "var(--dark-brown)" }}>
                    {" "}
                    Created:
                  </strong>{" "}
                  Canva · May 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
