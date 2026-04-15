import React from "react";
import Insta from '../assets/instagram.png'
import FacebookIcon from '../assets/facebook.png'
import XIcon from '../assets/twitter.png'

export default function KeenKeeperFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#2D5A45",
        color: "#ffffff",
        padding: "60px 24px 32px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            margin: "0 0 12px",
            color: "#ffffff",
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ fontWeight: "400" }}>Keen</span>Keeper
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.7)",
            margin: "0 0 32px",
            maxWidth: "460px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
        >
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <p
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#ffffff",
            margin: "0 0 16px",
            letterSpacing: "0.02em",
          }}
        >
          Social Links
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          {[
            { icon: <img src={Insta} alt="Insta" style={{ width: "20px", height: "20px" }} />, label: "Insta" },
            { icon: <img src={FacebookIcon} alt="Facebook" style={{ width: "20px", height: "20px" }} />, label: "Facebook" },
            { icon: <img src={XIcon} alt="X" style={{ width: "20px", height: "20px" }} />, label: "X" },
          ].map(({ icon, label }) => (
            <button
              key={label}
              aria-label={label}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "#1a1a1a",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
              }}
            >
              {icon}
            </button>
          ))}
        </div>

        <div
          style={{
            borderTop: "0.5px solid rgba(255,255,255,0.2)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.55)",
              margin: 0,
            }}
          >
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <nav
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}