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
            <Link to="/tours" className="btn btn-primary">
              ← Back to All Tours
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <div
        style={{
          paddingTop: "var(--nav-height)",
          background: "linear-gradient(160deg, var(--dark-brown) 0%, var(--warm-brown) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Tour image background */}
        {!imgError && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${tour.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, rgba(50,0,0,0.92) 0%, rgba(84,48,4,0.88) 100%)",
          }}
        />

        <div
          className="container"
          style={{ position: "relative", zIndex: 1, padding: "4rem var(--container-px)" }}
        >
          {/* Breadcrumb */}
          <div style={{ marginBottom: "1.5rem" }}>
            <Link
              to="/tours"
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.55)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              ← All Tours
            </Link>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "1.25rem" }}>
            <span
              style={{
                background: "var(--gold-accent)",
                color: "var(--dark-brown)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                padding: "0.3rem 0.875rem",
                borderRadius: "50px",
                textTransform: "uppercase",
              }}
            >
              Free Tour
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.8rem",
                padding: "0.3rem 0.875rem",
                borderRadius: "50px",
              }}
            >
              {tour.theme}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 700,
              color: "var(--white)",
              marginBottom: "1.5rem",
              lineHeight: 1.15,
            }}
          >
            {tour.name}
          </h1>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {[
              { icon: "📍", text: tour.location },
              { icon: "⏱️", text: tour.duration },
              { icon: "🌅", text: `Best time: ${tour.bestTime}` },
              { icon: "👤", text: `Tour by: ${tour.member ?? "The Loop by 5"}` },
            ].map((item) => (
              <span
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "flex-start", gap: "3.5rem" }}>
            {/* Left: description */}
            <div>
              {/* Tour image */}
              <div
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  marginBottom: "2rem",
                  aspectRatio: "16/10",
                  background: "var(--light-beige)",
                }}
              >
                {!imgError ? (
                  <img
                    src={tour.image}
                    alt={`${tour.name} tour`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, var(--light-beige) 0%, #ead4b8 100%)",
                      color: "var(--text-muted)",
                      gap: "0.75rem",
                    }}
                  >
                    <span style={{ fontSize: "3rem", opacity: 0.5 }}>🗺️</span>
                    <span style={{ fontSize: "0.875rem", opacity: 0.6, fontStyle: "italic" }}>
                      Tour photo coming soon
                    </span>
                  </div>
                )}
              </div>

              {/* Full description */}
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  color: "var(--dark-brown)",
                  marginBottom: "1rem",
                }}
              >
                About This Tour
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                {tour.fullDescription}
              </p>

              {/* Why join */}
              <div
                style={{
                  padding: "1.75rem",
                  background: "var(--light-beige)",
                  borderRadius: "var(--radius-md)",
                  borderLeft: "4px solid var(--gold-accent)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: "var(--dark-brown)",
                    marginBottom: "0.625rem",
                  }}
                >
                  Why Students Should Join
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                  This tour is free, student-friendly, and designed to help you experience
                  Singapore beyond the classroom. No booking required — just show up and
                  explore with fellow students.
                </p>
              </div>
            </div>

            {/* Right: details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {/* Tour info */}
              <div
                style={{
                  background: "var(--light-beige)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  border: "1px solid var(--border-light)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    color: "var(--dark-brown)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Tour Details
                </h3>
                {[
                  { icon: "📍", label: "Location", value: tour.location },
                  { icon: "⏱️", label: "Duration", value: tour.duration },
                  { icon: "🌅", label: "Best Time", value: tour.bestTime },
                  { icon: "💰", label: "Cost", value: "Free" },
                  { icon: "👤", label: "Tour Lead", value: tour.member ?? "The Loop by 5" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      padding: "0.75rem 0",
                      borderTop: "1px solid var(--border-light)",
                    }}
                  >
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                          marginBottom: "0.15rem",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          color: "var(--dark-brown)",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  border: "1px solid var(--border-light)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    color: "var(--dark-brown)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Tour Highlights
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {tour.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--gold-accent)",
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: "0.1rem",
                        }}
                      >
                        ✦
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Objectives */}
              <div
                style={{
                  background: "var(--dark-brown)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    color: "var(--white)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Learning Objectives
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {tour.learningObjectives.map((obj) => (
                    <li
                      key={obj}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--gold-accent)",
                          flexShrink: 0,
                          marginTop: "0.1rem",
                        }}
                      >
                        →
                      </span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back button */}
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
