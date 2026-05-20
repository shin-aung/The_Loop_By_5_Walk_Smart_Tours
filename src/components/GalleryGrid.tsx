import { useState } from "react";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

interface Props {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: Props) {
  const [errored, setErrored] = useState<Set<number>>(new Set());

  const handleError = (id: number) => {
    setErrored((prev) => new Set(prev).add(id));
  };

  return (
    <div className="gallery-grid">
      {images.map((img) => (
        <div className="gallery-item" key={img.id}>
          {!errored.has(img.id) ? (
            <>
              <img
                src={img.src}
                alt={img.alt}
                onError={() => handleError(img.id)}
              />
              <div className="gallery-item__overlay">
                <span className="gallery-item__caption">{img.caption}</span>
              </div>
            </>
          ) : (
            <div className="gallery-placeholder">
              <span className="gallery-placeholder__icon">🖼️</span>
              <span className="gallery-placeholder__text">{img.caption}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
