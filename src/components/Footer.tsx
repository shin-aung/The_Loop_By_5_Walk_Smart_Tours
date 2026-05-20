import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-name">The Loop by 5</div>
            <div className="footer__brand-tagline">Walk Smart Tours for Students</div>
            <p className="footer__brand-desc">
              Free educational walking tours that help PGDM students explore,
              learn, and connect with Singapore's culture, art, heritage, and
              architecture outside the classroom.
            </p>
          </div>

          {/* Pages */}
          <div>
            <div className="footer__col-title">Explore</div>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/team" className="footer__link">Our Team</Link></li>
              <li><Link to="/tours" className="footer__link">Walk Smart Tours</Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <div className="footer__col-title">More</div>
            <ul className="footer__links">
              <li><Link to="/newsletter" className="footer__link">Newsletter</Link></li>
              <li><Link to="/achievements" className="footer__link">Achievements</Link></li>
              <li><Link to="/future" className="footer__link">Future Goals</Link></li>
            </ul>
            <div style={{ marginTop: "1.5rem" }}>
              <div className="footer__col-title">Info</div>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                PGDM Group 5<br />
                Corporate Communication<br />
                ACETEK College · May 2026<br />
                Lecturer: Mr. Seow
              </p>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} The Loop by 5 · PGDM Group 5 · All rights reserved.
          </p>
          <p className="footer__credits">
            Walk Smart Tours · <span>Free &amp; Student-Led</span> · Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
