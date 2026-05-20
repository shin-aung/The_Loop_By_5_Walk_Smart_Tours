import { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
import { tours } from "../data/tours";

// ─── Fix Leaflet default icon issue in Vite ───────────────────────────────────
// We use DivIcon only, so this avoids any broken image references
delete (L.Icon.Default.prototype as any)._getIconUrl;

// ─── Walking route waypoints per tour ────────────────────────────────────────
const ROUTES: Record<string, [number, number][]> = {
  "kampong-glam-cultural-heritage": [
    [1.3007, 103.8561], // Bugis MRT (start)
    [1.3025, 103.8593], // Sultan Mosque
    [1.3022, 103.8612], // Arab Street
    [1.3024, 103.8624], // Haji Lane
    [1.3028, 103.8598], // Bussorah Street (end)
  ],
  "marina-bay-tech-architecture-walk": [
    [1.2775, 103.8531], // Marina Bay MRT (start)
    [1.2797, 103.8570], // Green Heart Marina One
    [1.2845, 103.8601], // Floating Apple Store MBS (end)
  ],
  "sentosa-island-art-light-culture": [
    [1.2648, 103.8195], // HarbourFront MRT (start)
    [1.2575, 103.8226], // Sentosa Boardwalk
    [1.2540, 103.8205], // Sensoryscape
    [1.2517, 103.8186], // Beach (end)
  ],
  "gardens-by-the-bay": [
    [1.2786, 103.8638], // Main Entrance (start)
    [1.2816, 103.8636], // Supertree Grove
    [1.2826, 103.8629], // OCBC Skywalk
    [1.2836, 103.8631], // Flower Dome
    [1.2843, 103.8626], // Cloud Forest (end)
  ],
  "marina-bay-sands": [
    [1.2840, 103.8610], // The Shoppes (start)
    [1.2841, 103.8607], // SkyPark Observation Deck
    [1.2863, 103.8592], // ArtScience Museum
    [1.2837, 103.8620], // Event Plaza – Spectra Show (end)
  ],
  "sustainability-retail-walk": [
    [1.2989, 103.8458], // Dhoby Ghaut MRT (start)
    [1.3001, 103.8449], // Plaza Singapura
    [1.3042, 103.8390], // Orchard Road
    [1.3008, 103.8400], // 313@Somerset (end)
  ],
  "joo-chiat-cultural-heritage": [
    [1.3178, 103.8920], // Paya Lebar MRT (start)
    [1.3134, 103.9056], // Joo Chiat Road
    [1.3126, 103.9017], // Koon Seng Road (end)
  ],
  "marina-barrage-tour": [
    [1.2799, 103.8721], // Main Entrance (start)
    [1.2808, 103.8726], // Visitor Centre & Engineering Gallery
    [1.2815, 103.8710], // Rooftop Green Park
    [1.2790, 103.8740], // Waterfront Walkway (end)
  ],
  "suntec-city-tour": [
    [1.2908, 103.8561], // Esplanade MRT (start)
    [1.2942, 103.8573], // Fountain of Wealth
    [1.2945, 103.8565], // Five Towers
    [1.2938, 103.8581], // Art Installations & Retail (end)
  ],
};

// Route accent colours — each tour gets a distinct warm hue
const ROUTE_COLORS: Record<string, string> = {
  "kampong-glam-cultural-heritage":     "#e87040",
  "marina-bay-tech-architecture-walk":  "#4e9af1",
  "sentosa-island-art-light-culture":   "#9b59b6",
  "gardens-by-the-bay":                 "#27ae60",
  "marina-bay-sands":                   "#c0392b",
  "sustainability-retail-walk":         "#16a085",
  "joo-chiat-cultural-heritage":        "#d4ac0d",
  "marina-barrage-tour":                "#2980b9",
  "suntec-city-tour":                   "#8e44ad",
};

// ─── Custom numbered DivIcon ──────────────────────────────────────────────────
function makeIcon(num: number, active: boolean, color: string) {
  return L.divIcon({
    html: `
      <div style="
        width:34px;height:34px;border-radius:50%;
        background:${active ? color : "#320000"};
        border:2.5px solid ${active ? "#fff" : color};
        display:flex;align-items:center;justify-content:center;
        color:${active ? "#fff" : color};
        font-weight:800;font-size:12px;
        font-family:'DM Sans',system-ui,sans-serif;
        box-shadow:0 3px 10px rgba(0,0,0,0.4);
        cursor:pointer;transition:all .15s;
      ">${num}</div>
      <div style="
        width:0;height:0;
        border-left:5px solid transparent;
        border-right:5px solid transparent;
        border-top:8px solid ${active ? color : "#320000"};
        margin:0 auto;
      "></div>`,
    className: "",
    iconSize: [34, 42],
    iconAnchor: [17, 42],
    popupAnchor: [0, -44],
  });
}

// ─── MRT stations (nearest starting point for each tour) ─────────────────────
interface MRTStation {
  name: string;
  position: [number, number];
  lines: string;
  tourSlug: string;
}

const MRT_STATIONS: MRTStation[] = [
  { name: "Bugis MRT",        position: [1.3007, 103.8561], lines: "EW / DT Line",  tourSlug: "kampong-glam-cultural-heritage" },
  { name: "Marina Bay MRT",   position: [1.2775, 103.8531], lines: "CC / NS Line",  tourSlug: "marina-bay-tech-architecture-walk" },
  { name: "HarbourFront MRT", position: [1.2648, 103.8195], lines: "NE / CC Line",  tourSlug: "sentosa-island-art-light-culture" },
  { name: "Bayfront MRT",     position: [1.2830, 103.8593], lines: "CC / DT Line",  tourSlug: "gardens-by-the-bay" },
  { name: "Bayfront MRT",     position: [1.2832, 103.8597], lines: "CC / DT Line",  tourSlug: "marina-bay-sands" },
  { name: "Dhoby Ghaut MRT",  position: [1.2989, 103.8458], lines: "NS / CC / NE",  tourSlug: "sustainability-retail-walk" },
  { name: "Paya Lebar MRT",   position: [1.3178, 103.8920], lines: "EW / CC Line",  tourSlug: "joo-chiat-cultural-heritage" },
  { name: "Marina Bay MRT",   position: [1.2773, 103.8529], lines: "CC / NS Line",  tourSlug: "marina-barrage-tour" },
  { name: "Esplanade MRT",    position: [1.2908, 103.8561], lines: "CC Line",       tourSlug: "suntec-city-tour" },
];

function makeMRTIcon(active: boolean) {
  return L.divIcon({
    html: `
      <div style="
        background:${active ? "#c0392b" : "#2c3e50"};
        color:#fff;
        border:2px solid ${active ? "#e74c3c" : "rgba(255,255,255,0.6)"};
        border-radius:6px;
        padding:2px 6px;
        font-size:9px;
        font-weight:800;
        font-family:'DM Sans',system-ui,sans-serif;
        white-space:nowrap;
        letter-spacing:.04em;
        box-shadow:0 2px 6px rgba(0,0,0,0.4);
        display:flex;align-items:center;gap:3px;
      ">
        <span style="font-size:10px;">🚇</span> MRT
      </div>`,
    className: "",
    iconSize: [52, 22],
    iconAnchor: [26, 11],
    popupAnchor: [0, -14],
  });
}

// ─── MRT Marker sub-component ─────────────────────────────────────────────────
function MRTMarker({
  station, active,
}: {
  station: MRTStation;
  active: boolean;
}) {
  const color = ROUTE_COLORS[station.tourSlug] ?? "#C89B5A";
  return (
    <Marker
      position={station.position}
      icon={makeMRTIcon(active)}
      zIndexOffset={active ? 500 : 0}
    >
      <Popup maxWidth={200} className="tour-popup">
        <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", padding: "2px" }}>
          <div style={{
            height: "3px", background: color,
            borderRadius: "2px", marginBottom: "7px",
          }} />
          <div style={{
            display: "flex", alignItems: "center", gap: "6px",
            marginBottom: "4px",
          }}>
            <span style={{ fontSize: "16px" }}>🚇</span>
            <div>
              <div style={{
                fontWeight: 800, fontSize: "13px", color: "#320000", lineHeight: 1.2,
              }}>
                {station.name}
              </div>
              <div style={{ fontSize: "10px", color: "#999", marginTop: "1px" }}>
                {station.lines}
              </div>
            </div>
          </div>
          <div style={{
            fontSize: "10px", color: color, fontWeight: 700,
            background: `${color}18`, padding: "3px 7px",
            borderRadius: "4px", display: "inline-block",
          }}>
            Start point for this tour
          </div>
        </div>
      </Popup>
    </Marker>
  );
}


function TourMarker({
  tour, num, active, onSelect,
}: {
  tour: (typeof tours)[0];
  num: number;
  active: boolean;
  onSelect: (slug: string | null) => void;
}) {
  const navigate = useNavigate();
  const pos = tour.coordinates as [number, number];
  const color = ROUTE_COLORS[tour.slug] ?? "#C89B5A";

  return (
    <Marker
      position={pos}
      icon={makeIcon(num, active, color)}
      eventHandlers={{
        click: () => onSelect(active ? null : tour.slug),
      }}
      zIndexOffset={active ? 1000 : 0}
    >
      <Popup maxWidth={260} className="tour-popup">
        <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", padding: "2px" }}>
          {/* Colour bar */}
          <div style={{
            height: "4px", background: color,
            borderRadius: "2px", marginBottom: "8px",
          }} />

          {/* Tour number + name */}
          <div style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: ".12em",
            textTransform: "uppercase", color: color, marginBottom: "3px",
          }}>
            Tour {num}
          </div>
          <div style={{
            fontFamily: "'Playfair Display',Georgia,serif",
            fontSize: "14px", fontWeight: 700, color: "#320000",
            lineHeight: 1.25, marginBottom: "6px",
          }}>
            {tour.name}
          </div>

          {/* Meta */}
          <div style={{
            fontSize: "11px", color: "#7a6050",
            marginBottom: "4px", display: "flex", gap: "6px",
          }}>
            <span>📍 {tour.location.split(",")[0]}</span>
            <span>⏱️ {tour.duration}</span>
          </div>

          {/* Short desc */}
          <div style={{
            fontSize: "11px", color: "#555", lineHeight: 1.5,
            marginBottom: "10px",
          }}>
            {tour.shortDescription.slice(0, 90)}…
          </div>

          {/* Route stop count */}
          {ROUTES[tour.slug] && (
            <div style={{
              fontSize: "10px", color: color, fontWeight: 700,
              marginBottom: "8px",
            }}>
              🗺️ {ROUTES[tour.slug].length} stops on route
            </div>
          )}

          {/* CTA */}
          <button
            onClick={() => navigate(`/tours/${tour.slug}`)}
            style={{
              width: "100%", padding: "8px 0",
              background: "#320000", color: "#fff",
              border: "none", borderRadius: "50px",
              fontSize: "12px", fontWeight: 700,
              cursor: "pointer", fontFamily: "'DM Sans',sans-serif",
              letterSpacing: ".03em",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = color)}
            onMouseLeave={e => (e.currentTarget.style.background = "#320000")}
          >
            See Full Tour →
          </button>
        </div>
      </Popup>
    </Marker>
  );
}

// ─── Sub-component: fit bounds helper ────────────────────────────────────────
function FitBounds() {
  const map = useMap();
  const allPoints = tours
    .filter(t => t.coordinates)
    .map(t => t.coordinates as [number, number]);
  if (allPoints.length > 0) {
    map.fitBounds(L.latLngBounds(allPoints), { padding: [48, 48] });
  }
  return null;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function TourMap() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const handleSelect = (slug: string | null) => setActiveSlug(slug);

  return (
    <div>
      {/* Active tour banner */}
      {activeSlug && (() => {
        const tour = tours.find(t => t.slug === activeSlug)!;
        const num = tours.indexOf(tour) + 1;
        const color = ROUTE_COLORS[activeSlug] ?? "#C89B5A";
        return (
          <div style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            padding: "0.75rem 1.25rem", marginBottom: "0.75rem",
            background: "var(--white)", borderRadius: "var(--radius-md)",
            border: `2px solid ${color}`, boxShadow: "var(--shadow-sm)",
          }}>
            <span style={{
              width: "28px", height: "28px", borderRadius: "50%",
              background: color, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.75rem", fontWeight: 800, flexShrink: 0,
            }}>{num}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                color: "var(--dark-brown)", fontSize: "0.9rem",
              }}>{tour.name}</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                {ROUTES[activeSlug]?.length ?? 0} stops · {tour.duration} · {tour.member?.split(" ")[0]}
              </div>
            </div>
            <button
              onClick={() => setActiveSlug(null)}
              style={{
                width: "24px", height: "24px", borderRadius: "50%",
                background: "var(--light-beige)", border: "none",
                cursor: "pointer", fontSize: "0.7rem", color: "var(--text-muted)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >✕</button>
          </div>
        );
      })()}

      {/* MAP */}
      <div style={{
        borderRadius: "var(--radius-lg)", overflow: "hidden",
        border: "1px solid var(--border-light)", boxShadow: "var(--shadow-md)",
        height: "520px", position: "relative", zIndex: 0,
      }}>
        <MapContainer
          center={[1.3521, 103.8198]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
          zoomControl={true}
        >
          {/* OpenStreetMap tiles — real Singapore map */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />

          {/* Auto-fit bounds to show all tours */}
          <FitBounds />

          {/* Tour route polylines */}
          {tours.map((tour) => {
            const waypoints = ROUTES[tour.slug];
            if (!waypoints) return null;
            const color = ROUTE_COLORS[tour.slug] ?? "#C89B5A";
            const isActive = activeSlug === tour.slug;
            const isInactive = activeSlug !== null && !isActive;

            return (
              <Polyline
                key={`route-${tour.slug}`}
                positions={waypoints}
                pathOptions={{
                  color,
                  weight: isActive ? 5 : isInactive ? 1.5 : 3,
                  opacity: isActive ? 1 : isInactive ? 0.25 : 0.65,
                  dashArray: isActive ? "8, 6" : "6, 8",
                  lineCap: "round",
                  lineJoin: "round",
                }}
              />
            );
          })}

          {/* MRT station markers */}
          {MRT_STATIONS.map((station, idx) => {
            const isActive = activeSlug === null || activeSlug === station.tourSlug;
            return (
              <MRTMarker
                key={`mrt-${station.tourSlug}-${idx}`}
                station={station}
                active={isActive && activeSlug === station.tourSlug}
              />
            );
          })}

          {/* Tour markers */}
          {tours.map((tour, idx) => {
            if (!tour.coordinates) return null;
            return (
              <TourMarker
                key={tour.slug}
                tour={tour}
                num={idx + 1}
                active={activeSlug === tour.slug}
                onSelect={handleSelect}
              />
            );
          })}
        </MapContainer>
      </div>

      {/* Map hints */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "1rem",
        justifyContent: "center", marginTop: "0.625rem",
      }}>
        {[
          { icon: "🔵", text: "Numbered pins = Tour location" },
          { icon: "🚇", text: "MRT badge = Nearest station (start point)" },
          { icon: "💡", text: "Click any pin or legend item for route details" },
        ].map(item => (
          <span key={item.text} style={{
            fontSize: "0.72rem", color: "var(--text-muted)",
            display: "flex", alignItems: "center", gap: "0.35rem",
            fontStyle: "italic",
          }}>
            {item.icon} {item.text}
          </span>
        ))}
      </div>

      {/* Legend */}
      <div style={{
        marginTop: "1rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "0.5rem",
      }}>
        {tours.map((tour, idx) => {
          const color = ROUTE_COLORS[tour.slug] ?? "#C89B5A";
          const isActive = activeSlug === tour.slug;
          return (
            <button
              key={tour.id}
              onClick={() => handleSelect(isActive ? null : tour.slug)}
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.625rem 0.875rem",
                background: isActive ? "var(--light-beige)" : "var(--white)",
                border: `1.5px solid ${isActive ? color : "var(--border-light)"}`,
                borderRadius: "var(--radius-sm)", cursor: "pointer",
                textAlign: "left", transition: "all 0.2s",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={e => {
                if (!isActive) e.currentTarget.style.borderColor = color;
              }}
              onMouseLeave={e => {
                if (!isActive) e.currentTarget.style.borderColor = "var(--border-light)";
              }}
            >
              {/* Route colour swatch + number */}
              <span style={{
                width: "26px", height: "26px", borderRadius: "50%",
                background: isActive ? color : "#320000",
                border: `2px solid ${color}`,
                color: isActive ? "#fff" : color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.72rem", fontWeight: 800, flexShrink: 0,
              }}>
                {idx + 1}
              </span>

              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontSize: "0.82rem", fontWeight: 600,
                  color: isActive ? color : "var(--dark-brown)",
                  lineHeight: 1.3, whiteSpace: "nowrap",
                  overflow: "hidden", textOverflow: "ellipsis",
                }}>
                  {tour.name}
                </div>
                <div style={{
                  fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "1px",
                }}>
                  {tour.member?.split(" ")[0]} · {ROUTES[tour.slug]?.length ?? 0} stops
                </div>
              </div>

              {/* Route line preview */}
              <div style={{
                marginLeft: "auto", flexShrink: 0,
                display: "flex", alignItems: "center", gap: "2px",
              }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    width: "6px", height: "3px",
                    background: color,
                    borderRadius: "1px",
                    opacity: isActive ? 1 : 0.5,
                  }} />
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
