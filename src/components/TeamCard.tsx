import { useState } from "react";
import type { TeamMember } from "../data/teamMembers";

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  const [profImgError, setProfImgError] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <>
      {/* ── CARD ── */}
      <article className="team-card-v2">
        {/* Professional photo */}
        <div className="team-card-v2__photo-wrap">
          {!profImgError ? (
            <img
              src={member.professionalImage}
              alt={`${member.name} — professional photo`}
              className="team-card-v2__photo"
              onError={() => setProfImgError(true)}
            />
          ) : (
            <div className="team-card-v2__photo-fallback">{initials}</div>
          )}

          {/* Country flag badge */}
          <span className="team-card-v2__flag" aria-label={member.country}>
            {member.flag}
          </span>

          {/* About Me button overlay */}
          <button
            className="team-card-v2__about-btn"
            onClick={() => setShowAboutMe(true)}
            aria-label={`View ${member.shortName}'s About Me`}
          >
            About Me ✦
          </button>
        </div>

        {/* Body */}
        <div className="team-card-v2__body">
          <h3 className="team-card-v2__name">{member.name}</h3>
          <p className="team-card-v2__country">{member.flag} {member.country}</p>
          <span className="team-card-v2__focus">{member.focusArea}</span>
          <p className="team-card-v2__desc">{member.description}</p>

          {/* Portfolio section */}
          {member.portfolioUrl ? (
            <div className="team-card-v2__portfolio">
              <div className="team-card-v2__portfolio-label">Portfolio</div>
              <div className="team-card-v2__portfolio-inner">
                {/* QR code — scannable image, click opens link */}
                <a
                  href={member.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-card-v2__qr-link"
                  aria-label={`Scan QR or click to visit ${member.name}'s portfolio`}
                  title={`Visit ${member.name}'s portfolio`}
                >
                  <img
                    src={member.portfolioQr}
                    alt={`QR code for ${member.name}'s portfolio`}
                    className="team-card-v2__qr"
                  />
                  <span className="team-card-v2__qr-hint">Scan or tap →</span>
                </a>

                {/* Text link */}
                <a
                  href={member.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-card-v2__portfolio-url"
                >
                  🔗 {member.portfolioLabel}
                </a>
              </div>
            </div>
          ) : (
            <div className="team-card-v2__no-portfolio">
              Portfolio coming soon
            </div>
          )}
        </div>
      </article>

      {/* ── ABOUT ME LIGHTBOX ── */}
      {showAboutMe && (
        <div
          className="team-lightbox"
          onClick={() => setShowAboutMe(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${member.name} — About Me`}
        >
          <div
            className="team-lightbox__box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="team-lightbox__header">
              <div>
                <span className="team-lightbox__eyebrow">About Me</span>
                <h2 className="team-lightbox__title">{member.name}</h2>
              </div>
              <button
                className="team-lightbox__close"
                onClick={() => setShowAboutMe(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* About Me image */}
            <div className="team-lightbox__img-wrap">
              <img
                src={member.aboutMeImage}
                alt={`${member.name} — About Me`}
                className="team-lightbox__img"
              />
            </div>

            {/* Footer with portfolio link */}
            {member.portfolioUrl && (
              <div className="team-lightbox__footer">
                <a
                  href={member.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ fontSize: "0.875rem" }}
                >
                  🔗 Visit Full Portfolio
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
