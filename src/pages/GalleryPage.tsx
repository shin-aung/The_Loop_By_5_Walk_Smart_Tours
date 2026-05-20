import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import GalleryGrid, { type GalleryImage } from "../components/GalleryGrid";

const categories = ["All", "Haji Lane", "Gardens by the Bay", "Marina Bay", "Kampong Glam", "Team"];

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/media/images/gallery/haji-lane-01.jpg", alt: "Haji Lane street art", caption: "Street Art · Haji Lane", category: "Haji Lane" },
  { id: 2, src: "/media/images/gallery/haji-lane-02.jpg", alt: "Haji Lane boutiques", caption: "Indie Boutiques · Haji Lane", category: "Haji Lane" },
  { id: 3, src: "/media/images/gallery/haji-lane-03.jpg", alt: "Haji Lane colourful buildings", caption: "Colourful Architecture · Haji Lane", category: "Haji Lane" },
  { id: 4, src: "/media/images/gallery/gardens-01.jpg", alt: "Gardens by the Bay Supertrees", caption: "Supertree Grove · Gardens by the Bay", category: "Gardens by the Bay" },
  { id: 5, src: "/media/images/gallery/gardens-02.jpg", alt: "Gardens by the Bay night view", caption: "Night Garden · Gardens by the Bay", category: "Gardens by the Bay" },
  { id: 6, src: "/media/images/gallery/marina-01.jpg", alt: "Marina Bay Sands", caption: "Marina Bay Sands · Marina Bay", category: "Marina Bay" },
  { id: 7, src: "/media/images/gallery/marina-02.jpg", alt: "Marina Bay waterfront", caption: "Bay Waterfront · Marina Bay", category: "Marina Bay" },
  { id: 8, src: "/media/images/gallery/kampong-glam-01.jpg", alt: "Sultan Mosque Kampong Glam", caption: "Sultan Mosque · Kampong Glam", category: "Kampong Glam" },
  { id: 9, src: "/media/images/gallery/kampong-glam-02.jpg", alt: "Arab Street Kampong Glam", caption: "Arab Street · Kampong Glam", category: "Kampong Glam" },
  { id: 10, src: "/media/images/gallery/team-01.jpg", alt: "The Loop by 5 team", caption: "The Loop by 5 Team", category: "Team" },
  { id: 11, src: "/media/images/gallery/team-02.jpg", alt: "Team at Haji Lane", caption: "Team at Haji Lane", category: "Team" },
  { id: 12, src: "/media/images/gallery/team-03.jpg", alt: "Team newsletter shoot", caption: "Newsletter Feature Shoot", category: "Team" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Visual Stories</span>
            <h1 className="page-hero__title">Photo Gallery</h1>
            <p className="page-hero__description">
              Artistic moments from our five Walk Smart Tours — exploring Singapore's
              culture, streets, and heritage through the lens.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <section className="section section--white">
        <div className="container">
          <SectionTitle
            eyebrow="Our Gallery"
            heading="Moments from the Walk"
            subtitle="Photos from Haji Lane, Gardens by the Bay, Marina Bay, Kampong Glam, and team activities."
            center
          />

          {/* Category filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.625rem",
              justifyContent: "center",
              marginBottom: "2.5rem",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "50px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "var(--transition)",
                  border: active === cat ? "2px solid var(--dark-brown)" : "2px solid var(--border-light)",
                  background: active === cat ? "var(--dark-brown)" : "transparent",
                  color: active === cat ? "var(--white)" : "var(--text-muted)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <GalleryGrid images={filtered} />

          {/* Placeholder note */}
          <div
            style={{
              textAlign: "center",
              marginTop: "3rem",
              padding: "1.5rem",
              background: "var(--light-beige)",
              borderRadius: "var(--radius-md)",
              maxWidth: "520px",
              margin: "2.5rem auto 0",
            }}
          >
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
              📸 Gallery photos will be updated with real tour images soon.
              Placeholder images are shown until final photos are provided.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
