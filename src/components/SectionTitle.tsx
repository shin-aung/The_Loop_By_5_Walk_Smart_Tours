interface Props {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ eyebrow, heading, subtitle, center }: Props) {
  return (
    <div className={`section-title${center ? " section-title--center" : ""}`}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{heading}</h2>
      <div className="section-title__divider" />
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
}
