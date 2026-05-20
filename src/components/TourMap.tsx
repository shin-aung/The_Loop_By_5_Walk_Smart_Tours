import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { tours } from "../data/tours";

// Leaflet is loaded via CDN in index.html to avoid SSR/bundler issues.
// We declare the global L type here.
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    L: any;
  }
}

// Brand colours
const DARK_BROWN = "#320000";
const GOLD = "#C89B5A";
const WHITE = "#ffffff";

// Numbered marker for each tour
function makeMarkerIcon(num: number) {
  const html = `
    <div style="
      display:flex; flex-direction:column; align-items:center;
      filter: drop-shadow(0 3px 6px rgba(0,0,0,0.45));
    ">
      <div style="
        width:34px; height:34px; border-radius:50%;
        background:${DARK_BROWN}; border:2.5px solid ${GOLD};
        display:flex; align-items:center; justify-content:center;
        color:${GOLD}; font-weight:800; font-size:13px;
        font-family:'DM Sans',sans-serif;
      ">${num}</div>
      <div style="
        width:2px; height:8px; background:${DARK_BROWN};
      "></div>
      <div style="
        width:6px; height:6px; border-radius:50%;
        background:${DARK_BROWN};
      "></div>
    </div>`;
  return window.L.divIcon({
    html,
    className: "",
    iconSize: [34, 52],
    iconAnchor: [17, 52],
    popupAnchor: [0, -54],
  });
}

export default function TourMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const L = window.L;
    if (!L) {
      console.warn("Leaflet not loaded yet");
      return;
    }

    // Singapore bounds
    const map = L.map(mapRef.current, {
      center: [1.3121, 103.8760],
      zoom: 12,
      zoomControl: true,
      scrollWheelZoom: false,
    });
    mapInstanceRef.current = map;

    // OpenStreetMap tiles (free, no API key)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    // Add a marker for every tour that has coordinates
    tours.forEach((tour, idx) => {
      if (!tour.coordinates) return;
      const [lat, lng] = tour.coordinates;
      const marker = L.marker([lat, lng], {
        icon: makeMarkerIcon(idx + 1),
      }).addTo(map);

      // Popup content
      const popupHtml = `
        <div style="
          font-family:'DM Sans',system-ui,sans-serif;
          min-width:200px; max-width:240px;
          padding:2px;
        ">
          <div style="
            font-size:10px; font-weight:700; letter-spacing:.12em;
            text-transform:uppercase; color:${GOLD}; margin-bottom:4px;
          ">Tour ${idx + 1}</div>
          <div style="
            font-family:'Playfair Display',Georgia,serif;
            font-size:14px; font-weight:700; color:${DARK_BROWN};
            margin-bottom:5px; line-height:1.3;
          ">${tour.name}</div>
          <div style="
            font-size:11px; color:#7a6050; line-height:1.5;
            margin-bottom:10px;
          ">${tour.shortDescription.slice(0, 90)}…</div>
          <button
            id="tour-map-btn-${tour.id}"
            style="
              width:100%; padding:7px 0;
              background:${DARK_BROWN}; color:${WHITE};
              border:none; border-radius:50px;
              font-size:12px; font-weight:600;
              cursor:pointer; font-family:'DM Sans',sans-serif;
              letter-spacing:.03em;
            "
          >See Tour →</button>
        </div>`;

      const popup = L.popup({
        closeButton: true,
        maxWidth: 260,
        className: "tour-map-popup",
      }).setContent(popupHtml);

      marker.bindPopup(popup);

      // Navigate on popup button click (after popup is open)
      marker.on("popupopen", () => {
        const btn = document.getElementById(`tour-map-btn-${tour.id}`);
        if (btn) {
          btn.onclick = () => navigate(`/tours/${tour.slug}`);
        }
      });
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Map */}
      <div
        ref={mapRef}
        style={{
          height: "480px",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid var(--border-light)",
          boxShadow: "var(--shadow-md)",
          background: "#e8ddd0",
          zIndex: 0,
          position: "relative",
        }}
      />

      {/* Legend */}
      <div
        style={{
          marginTop: "1.25rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "0.625rem",
        }}
      >
        {tours.map((tour, idx) => (
          <button
            key={tour.id}
            onClick={() => navigate(`/tours/${tour.slug}`)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.625rem 0.875rem",
              background: "var(--white)",
              border: "1px solid var(--border-light)",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
              fontFamily: "var(--font-body)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold-accent)";
              e.currentTarget.style.background = "var(--light-beige)";
              e.currentTarget.style.transform = "translateX(3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-light)";
              e.currentTarget.style.background = "var(--white)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            {/* Number badge */}
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "var(--dark-brown)",
                color: "var(--gold-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.72rem",
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              {idx + 1}
            </span>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--dark-brown)",
                  lineHeight: 1.3,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {tour.name}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  marginTop: "1px",
                }}
              >
                {tour.member?.split(" ").slice(0, 2).join(" ")}
              </div>
            </div>

            <span
              style={{
                marginLeft: "auto",
                fontSize: "0.7rem",
                color: "var(--gold-accent)",
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
