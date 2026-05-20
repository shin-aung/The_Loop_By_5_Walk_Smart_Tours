import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { tours } from "../data/tours";

export default function TourDetailsPage() {
  const { tourSlug } = useParams<{ tourSlug: string }>();
  const tour = tours.find((t) => t.slug === tourSlug);
  const [imgError, setImgError] = useState(false);

  if (!tour) {
    return (
      <main style={{ paddingTop: "var(--nav-height)" }}>
        <div className="not-found">
          <div>
            <span className="not-found__icon">🗺️</span>
            <h1 className="not-found__title">Tour Not Found</h1>
            <p className="not-found__text">
              The tour you are looking for does not exist or may have been moved.
            </p>
            <Link to="/tours" className="btn btn-primary">← Back to All Tours</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* ── HERO ── */}
      <div style={{
        paddingTop: "var(--nav-height)",
        background: "linear-gradient(160deg, var(--dark-brown) 0%, var(--warm-brown) 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {!imgError && (
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${tour.image})`,
            backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18,
          }} />
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,rgba(50,0,0,0.92)0%,rgba(84,48,4,0.88)100%)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, padding: "4rem var(--container-px)" }}>
          <Link to="/tours" style={{
            fontSize: "0.85rem", color: "rgba(255,255,255,0.55)",
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            marginBottom: "1.5rem", transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
          >
            ← All Tours
          </Link>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "1.25rem" }}>
            {tour.planLabel && (
              <span style={{
                background: "var(--gold-accent)", color: "var(--dark-brown)",
                fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em",
                padding: "0.3rem 0.875rem", borderRadius: "50px", textTransform: "uppercase",
              }}>
                {tour.planLabel}
              </span>
            )}
            <span style={{
              background: "var(--dark-brown)", border: "1px solid var(--gold-accent)",
              color: "var(--gold-accent)", fontSize: "0.7rem", fontWeight: 700,
              letterSpacing: "0.08em", padding: "0.3rem 0.875rem", borderRadius: "50px", textTransform: "uppercase",
            }}>
              Free Tour
            </span>
            <span style={{
              background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)",
              fontSize: "0.8rem", padding: "0.3rem 0.875rem", borderRadius: "50px",
            }}>
              {tour.theme}
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,5vw,3.25rem)",
            fontWeight: 700, color: "var(--white)", marginBottom: "1.5rem", lineHeight: 1.15,
          }}>
            {tour.name}
          </h1>

          {/* Meta row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
            {[
              { icon: "📍", text: tour.location },
              { icon: "⏱️", text: tour.duration },
              ...(tour.timeRange ? [{ icon: "🕓", text: tour.timeRange }] : []),
              ...(tour.specialNote ? [{ icon: "✨", text: tour.specialNote }] : []),
              { icon: "👤", text: `Tour by: ${tour.member ?? "The Loop by 5"}` },
            ].map(item => (
              <span key={item.text} style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                fontSize: "0.875rem", color: "rgba(255,255,255,0.72)",
              }}>
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "flex-start", gap: "3rem" }}>

            {/* ── LEFT COLUMN ── */}
            <div>
              {/* Tour photo */}
              <div style={{
                borderRadius: "var(--radius-lg)", overflow: "hidden",
                marginBottom: "2rem", aspectRatio: "16/10", background: "var(--light-beige)",
              }}>
                {!imgError ? (
                  <img src={tour.image} alt={`${tour.name} tour`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={() => setImgError(true)} />
                ) : (
                  <div style={{
                    width: "100%", height: "100%", display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    background: "linear-gradient(135deg,var(--light-beige)0%,#ead4b8 100%)",
                    color: "var(--text-muted)", gap: "0.75rem",
                  }}>
                    <span style={{ fontSize: "3rem", opacity: 0.5 }}>🗺️</span>
                    <span style={{ fontSize: "0.875rem", opacity: 0.6, fontStyle: "italic" }}>Tour photo coming soon</span>
                  </div>
                )}
              </div>

              {/* About */}
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--dark-brown)", marginBottom: "1rem" }}>
                About This Tour
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                {tour.fullDescription}
              </p>

              {/* Plan image (full infographic) */}
              {tour.planImage && (
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--dark-brown)", marginBottom: "0.875rem" }}>
                    Tour Plan
                  </h3>
                  <a href={tour.planImage} target="_blank" rel="noopener noreferrer"
                    style={{ display: "block", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-light)" }}>
                    <img src={tour.planImage} alt="Full tour plan infographic"
                      style={{ width: "100%", display: "block" }} />
                  </a>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.5rem", fontStyle: "italic" }}>
                    Click to view full size
                  </p>
                </div>
              )}

              {/* Why join */}
              <div style={{
                padding: "1.75rem", background: "var(--light-beige)",
                borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--gold-accent)",
              }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--dark-brown)", marginBottom: "0.625rem" }}>
                  Why Students Should Join
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                  This tour is free, student-friendly, and designed to help you experience
                  Singapore beyond the classroom. No booking required — just show up and explore.
                </p>
              </div>

              {/* Useful links */}
              {tour.usefulLinks && tour.usefulLinks.length > 0 && (
                <div style={{ marginTop: "2rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--dark-brown)", marginBottom: "1rem" }}>
                    Useful Links
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {tour.usefulLinks.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                        style={{
                          display: "flex", alignItems: "center", gap: "0.875rem",
                          padding: "0.875rem 1.25rem",
                          background: "var(--light-beige)", borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-light)", textDecoration: "none",
                          transition: "var(--transition)",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold-accent)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.transform = "translateX(0)"; }}
                      >
                        <span style={{
                          width: "32px", height: "32px", borderRadius: "50%",
                          background: "var(--dark-brown)", color: "white",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "0.75rem", fontWeight: 700, flexShrink: 0,
                        }}>▶</span>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--dark-brown)" }}>{link.label}</div>
                          {link.sublabel && <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{link.sublabel}</div>}
                        </div>
                        <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--gold-accent)", fontWeight: 600 }}>Watch →</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

              {/* Tour info */}
              <div style={{ background: "var(--light-beige)", borderRadius: "var(--radius-lg)", padding: "1.75rem", border: "1px solid var(--border-light)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--dark-brown)", marginBottom: "1.25rem" }}>
                  Tour Details
                </h3>
                {[
                  { icon: "📍", label: "Location", value: tour.location },
                  { icon: "⏱️", label: "Duration", value: tour.duration },
                  ...(tour.timeRange ? [{ icon: "🕓", label: "Time", value: tour.timeRange }] : []),
                  { icon: "🌅", label: "Best Time", value: tour.bestTime },
                  ...(tour.specialNote ? [{ icon: "✨", label: "Special", value: tour.specialNote }] : []),
                  { icon: "💰", label: "Cost", value: "Free" },
                  { icon: "👤", label: "Tour Lead", value: tour.member ?? "The Loop by 5" },
                ].map(item => (
                  <div key={item.label} style={{
                    display: "flex", alignItems: "flex-start", gap: "0.75rem",
                    padding: "0.75rem 0", borderTop: "1px solid var(--border-light)",
                  }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.15rem" }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--dark-brown)" }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Itinerary */}
              {tour.itinerary && tour.itinerary.length > 0 && (
                <div style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "1.75rem", border: "1px solid var(--border-light)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--dark-brown)", marginBottom: "1.25rem" }}>
                    Itinerary & Timeline
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {tour.itinerary.map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: "0.875rem", position: "relative" }}>
                        {/* Timeline line */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                          <div style={{
                            width: "10px", height: "10px", borderRadius: "50%",
                            background: "var(--gold-accent)", border: "2px solid var(--dark-brown)",
                            marginTop: "4px", flexShrink: 0, zIndex: 1,
                          }} />
                          {i < tour.itinerary!.length - 1 && (
                            <div style={{ width: "2px", flex: 1, background: "var(--border-light)", minHeight: "28px" }} />
                          )}
                        </div>
                        <div style={{ paddingBottom: i < tour.itinerary!.length - 1 ? "1rem" : 0, flex: 1 }}>
                          <div style={{ display: "flex", gap: "0.5rem", alignItems: "baseline", flexWrap: "wrap" }}>
                            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--gold-accent)", letterSpacing: "0.05em", flexShrink: 0 }}>
                              {item.time}
                            </span>
                            <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--dark-brown)" }}>
                              {item.activity}
                            </span>
                            <span style={{
                              fontSize: "0.68rem", color: "white", background: "var(--warm-brown)",
                              padding: "0.15rem 0.5rem", borderRadius: "50px", fontWeight: 600, flexShrink: 0,
                            }}>
                              {item.duration}
                            </span>
                          </div>
                          {item.description && (
                            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem", lineHeight: 1.5 }}>
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* How to get there */}
              {tour.howToGetThere && tour.howToGetThere.length > 0 && (
                <div style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "1.75rem", border: "1px solid var(--border-light)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--dark-brown)", marginBottom: "1.25rem" }}>
                    How to Get There
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {tour.howToGetThere.map((step, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                        <span style={{
                          width: "22px", height: "22px", borderRadius: "50%",
                          background: "var(--dark-brown)", color: "var(--gold-accent)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "0.65rem", fontWeight: 700, flexShrink: 0, marginTop: "1px",
                        }}>
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Good to know */}
              {tour.goodToKnow && tour.goodToKnow.length > 0 && (
                <div style={{ background: "var(--dark-brown)", borderRadius: "var(--radius-lg)", padding: "1.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--white)", marginBottom: "1.25rem" }}>
                    Good to Know
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {tour.goodToKnow.map((tip, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.55 }}>
                        <span style={{ color: "var(--gold-accent)", flexShrink: 0, marginTop: "2px" }}>✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Make it Memorable */}
              {tour.makeItMemorable && tour.makeItMemorable.length > 0 && (
                <div style={{ background: "linear-gradient(135deg,var(--warm-brown),var(--dark-brown))", borderRadius: "var(--radius-lg)", padding: "1.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--gold-accent)", marginBottom: "1.25rem" }}>
                    ✨ Make it Memorable
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {tour.makeItMemorable.map((tip, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                        <span style={{ color: "var(--gold-accent)", flexShrink: 0, fontSize: "1rem" }}>★</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Highlights */}
              <div style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "1.75rem", border: "1px solid var(--border-light)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--dark-brown)", marginBottom: "1.25rem" }}>
                  Tour Highlights
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {tour.highlights.map(h => (
                    <li key={h} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--gold-accent)", fontWeight: 700, flexShrink: 0 }}>✦</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning objectives */}
              <div style={{ background: "var(--light-beige)", borderRadius: "var(--radius-lg)", padding: "1.75rem", border: "1px solid var(--border-light)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--dark-brown)", marginBottom: "1.25rem" }}>
                  Learning Objectives
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {tour.learningObjectives.map(obj => (
                    <li key={obj} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--warm-brown)", flexShrink: 0, fontWeight: 700 }}>→</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/tours" className="btn btn-secondary" style={{ justifyContent: "center" }}>
                ← Back to All Tours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
