import { Link } from "react-router-dom";
import { useState } from "react";
import type { Tour } from "../data/tours";

interface Props {
  tour: Tour;
}

export default function TourCard({ tour }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="tour-card">
      {/* Image */}
      <div className="tour-card__image-wrap">
        {!imgError ? (
          <img
            src={tour.image}
            alt={`${tour.name} walking tour`}
            className="tour-card__image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="tour-card__placeholder">
            <span className="tour-card__placeholder-icon">🗺️</span>
            <span className="tour-card__placeholder-text">Photo coming soon</span>
          </div>
        )}
        <span className="tour-card__theme-badge">Free Tour</span>
      </div>

      {/* Body */}
      <div className="tour-card__body">
        <h3 className="tour-card__name">{tour.name}</h3>
        <p className="tour-card__desc">{tour.shortDescription}</p>

        {/* Meta */}
        <div className="tour-card__meta">
          <span className="tour-card__meta-item">
            <span className="tour-card__meta-icon">📍</span>
            {tour.location}
          </span>
          <span className="tour-card__meta-item">
            <span className="tour-card__meta-icon">⏱️</span>
            {tour.duration}
          </span>
        </div>

        {/* CTA */}
        <Link
          to={`/tours/${tour.slug}`}
          className="tour-card__btn"
          aria-label={`See more about ${tour.name}`}
        >
          See More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
