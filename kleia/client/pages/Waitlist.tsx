import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Waitlist() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    console.log("Navigating back to home...");
    try {
      navigate("/", { replace: true });
    } catch (error) {
      console.error("React Router navigation failed:", error);
      // Fallback to standard navigation
      window.location.href = "/";
    }
  };

  useEffect(() => {
    // Set page title
    document.title = "Join the waitlist - Kleia";

    // Apply fullscreen styles
    document.documentElement.style.margin = "0";
    document.documentElement.style.height = "100%";
    document.documentElement.style.overflow = "hidden";
    document.body.style.margin = "0";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";

    // Load Tally script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);

    // Add responsive styles for back button
    const style = document.createElement("style");
    style.textContent = `
      .waitlist-back-btn {
        position: fixed !important;
        top: 20px !important;
        right: 20px !important;
        z-index: 1000 !important;
        background-color: rgba(73, 86, 243, 0.95) !important;
        color: white !important;
        border: none !important;
        border-radius: 50px !important;
        padding: 10px 16px !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        text-decoration: none !important;
        font-family: 'Inter', sans-serif !important;
        cursor: pointer !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
        backdrop-filter: blur(10px) !important;
        transition: all 0.2s ease !important;
        display: flex !important;
        align-items: center !important;
        gap: 6px !important;
        opacity: 0.9 !important;
      }

      .waitlist-back-btn:hover {
        opacity: 1 !important;
        background-color: #4956F3 !important;
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 12px rgba(73, 86, 243, 0.3) !important;
      }

      @media (max-width: 480px) {
        .waitlist-back-btn {
          top: 16px !important;
          right: 16px !important;
          padding: 8px 12px !important;
          font-size: 12px !important;
          gap: 4px !important;
        }

        .waitlist-back-btn svg {
          width: 14px !important;
          height: 14px !important;
        }
      }

      @media (max-width: 360px) {
        .waitlist-back-btn {
          padding: 6px 10px !important;
          font-size: 11px !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.documentElement.style.margin = "";
      document.documentElement.style.height = "";
      document.documentElement.style.overflow = "";
      document.body.style.margin = "";
      document.body.style.height = "";
      document.body.style.overflow = "";
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 0,
        padding: 0,
      }}
    >
      {/* Back button */}
      <button
        onClick={handleBackClick}
        className="waitlist-back-btn"
        title="Volver a Kleia"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Volver
      </button>

      <iframe
        data-tally-src="https://tally.so/r/mZBYa0"
        src="https://tally.so/r/mZBYa0"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Join the waitlist"
        loading="lazy"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: 0,
          background: "#f5f5f5",
        }}
      />
    </div>
  );
}
