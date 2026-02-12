import React, { useState } from "react";
import ProfilePic from "../assets/profile-pic.jpg";
import ReviewVideo from "../assets/review.mp4";

const Founder = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="founder-section" id="founder">
        <div className="container">
          <div className="founder-grid">

            {/* LEFT CONTENT */}
            <div className="founder-content">
              <span className="badge">MEET THE EXPERT</span>

              <h2>
                Building Dreams with <br />
                <span>Experience & Precision</span>
              </h2>

              <p>
                With over 6 years of hands-on experience in construction and renovation,
                we bring a balance of technical excellence and creative vision.
                We don’t just build structures — we build trust.
              </p>

              <div className="stats">
                <div>
                  <h3>6+</h3>
                  <p>Years Experience</p>
                </div>
                <div>
                  <h3>100+</h3>
                  <p>Projects Completed</p>
                </div>
              </div>

              <a href="#contact" className="cta-btn">Work With Us</a>
            </div>

            {/* RIGHT IMAGE (CLICKABLE) */}
            <div
              className="founder-card clickable"
              onClick={() => setShowVideo(true)}
            >
              <img src={ProfilePic} alt="Mr.Farhan - Founder of RA Contractor" />

              <div className="play-overlay">Any Dought👆</div>

              <div className="founder-identity">
                <h4>Mr.Farhan</h4>
                <p>Founder, RA Contractor</p>
              </div>

              <div className="quote">
                “Quality is not an act, it is a habit.”
              </div>
            </div>

          </div>
        </div>

        {/* STYLES */}
        <style>{`
          .founder-section {
            padding: 80px 0;
            background: #ffffff;
          }

          .founder-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 60px;
            align-items: center;
          }

          .badge {
            background: #e11d48;
            color: #fff;
            font-size: 12px;
            padding: 6px 12px;
            border-radius: 6px;
            display: inline-block;
            margin-bottom: 16px;
            letter-spacing: 1px;
            font-weight: 600;
          }

          .founder-content h2 {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 20px;
            color: #0f172a;
          }

          .founder-content h2 span {
            color: #d4af37;
          }

          .founder-content p {
            font-size: 16px;
            line-height: 1.7;
            color: #475569;
            margin-bottom: 30px;
          }

          .stats {
            display: flex;
            gap: 40px;
            margin-bottom: 30px;
          }

          .stats h3 {
            font-size: 36px;
            color: #d4af37;
            margin: 0;
          }

          .stats p {
            margin: 0;
            font-weight: 500;
            color: #0f172a;
          }

          .cta-btn {
            display: inline-block;
            background: #d4af37;
            color: #fff;
            padding: 14px 28px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
          }

          /* IMAGE CARD */
          .founder-card {
            max-width: 380px;
            margin-left: auto;
            background: #f8fafc;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.12);
            text-align: center;
            position: relative;
            cursor: pointer;
          }

          .founder-card img {
            width: 100%;
            height: auto;
            border-radius: 12px;
          }

          .play-overlay {
            position: absolute;
            inset: 20px;
            border-radius: 12px;
            background: rgba(0,0,0,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            color: #fff;
          }

          .founder-identity {
            margin-top: 16px;
          }

          .founder-identity h4 {
            margin: 0;
            font-size: 18px;
            font-weight: 700;
            color: #0f172a;
          }

          .founder-identity p {
            margin: 4px 0 0;
            font-size: 14px;
            color: #64748b;
          }

          .quote {
            margin-top: 16px;
            font-size: 14px;
            font-style: italic;
            color: #475569;
            background: #ffffff;
            padding: 12px;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          }

          /* MOBILE */
          @media (max-width: 768px) {
            .founder-grid {
              grid-template-columns: 1fr;
              text-align: center;
            }
            .founder-card {
              margin: 0 auto;
            }
            .stats {
              justify-content: center;
            }
          }
        `}</style>
      </section>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="video-modal">
          <button className="close-btn" onClick={() => setShowVideo(false)}>
            ✕
          </button>
          <video src={ReviewVideo} controls autoPlay />
        </div>
      )}

      <style>{`
        .video-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-modal video {
          width: 90%;
          max-width: 1000px;
          max-height: 90vh;
          border-radius: 12px;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 32px;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Founder;
