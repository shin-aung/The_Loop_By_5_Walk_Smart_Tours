import { useState } from "react";
import type { TeamMember } from "../data/teamMembers";

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  const [imgError, setImgError] = useState(false);
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <article className="team-card">
      <div className="team-card__image-wrap">
        {!imgError ? (
          <img
            src={member.image}
            alt={`${member.name} profile photo`}
            className="team-card__image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="team-card__placeholder-avatar">{initials}</div>
        )}
        <span className="team-card__flag" aria-label={member.country}>
          {member.flag}
        </span>
      </div>

      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__country">{member.country}</p>
        <span className="team-card__focus">{member.focusArea}</span>
        <p className="team-card__desc">{member.description}</p>
        {member.isPending && (
          <p className="team-card__pending">✦ Details coming soon</p>
        )}
      </div>
    </article>
  );
}
