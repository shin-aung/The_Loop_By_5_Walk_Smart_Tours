import type { Achievement } from "../data/achievements";

interface Props {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: Props) {
  return (
    <article className="achievement-card fade-in">
      <span className="achievement-card__icon" aria-hidden="true">
        {achievement.icon}
      </span>
      <div className="achievement-card__value">{achievement.value}</div>
      <div className="achievement-card__title">{achievement.title}</div>
      <p className="achievement-card__desc">{achievement.description}</p>

      <ul className="achievement-card__details">
        {achievement.details.map((detail, i) => (
          <li key={i} className="achievement-card__detail-item">
            {detail}
          </li>
        ))}
      </ul>
    </article>
  );
}
