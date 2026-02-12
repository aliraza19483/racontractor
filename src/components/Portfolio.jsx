import React, { useState } from "react";
import cabard from "../assets/Portfolio/cabard.jpeg";
import FlowShelling from "../assets/Portfolio/FlowShelling.jpeg";
import mirror from "../assets/Portfolio/mirror.jpeg";
import room from "../assets/Portfolio/room.jpeg";

import project5 from "../assets/Portfolio/project5.jpeg";
import project6 from "../assets/Portfolio/project6.jpeg";
import project7 from "../assets/Portfolio/project7.jpeg";
import project8 from "../assets/Portfolio/project8.jpeg";
import project9 from "../assets/Portfolio/project9.jpeg";
import project10 from "../assets/Portfolio/project10.jpeg";
import project11 from "../assets/Portfolio/project11.jpeg";
import project13 from "../assets/Portfolio/project13.jpeg";
import project14 from "../assets/Portfolio/project14.jpeg";
import project15 from "../assets/Portfolio/project15.jpeg";
import project16 from "../assets/Portfolio/project16.jpeg";
import project17 from "../assets/Portfolio/project17.jpeg";
import project18 from "../assets/Portfolio/project18.jpeg";
import project19 from "../assets/Portfolio/project19.jpeg";
import project20 from "../assets/Portfolio/project20.jpeg";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { img: cabard, title: "", category: "" },
    { img: FlowShelling, title: "", category: "" },
    { img: mirror, title: "", category: "" },
    { img: room, title: "", category: "" },
    { img: project5, title: "", category: "" },
    { img: project6, title: "", category: "" },
    { img: project7, title: "", category: "" },
    { img: project8, title: "", category: "" },
    { img: project9, title: "", category: "" },
    { img: project10, title: "", category: "" },
    { img: project11, title: "", category: "" },
    { img: project13, title: "", category: "" },
    { img: project14, title: "", category: "" },
    { img: project15, title: "", category: "" },
    { img: project16, title: "", category: "" },
    { img: project17, title: "", category: "" },
    { img: project18, title: "", category: "" },
    { img: project19, title: "", category: "" },
    { img: project20, title: "", category: "" },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="section">
      <div className="container">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-2">
              Recent Projects
            </h2>
            <p className="text-muted">
              Explore our latest masterpieces in interior design
            </p>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="hidden md:block text-primary font-semibold hover:underline"
          >
            {showAll ? "Show Less ←" : "View All Projects →"}
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {visibleProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">

              {/* FIXED RATIO CONTAINER */}
              <div className="img-box">
                <img
                  src={project.img}
                  alt={project.title}
                  className="img-fill"
                />

                <div className="overlay"></div>

                <div className="caption">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-outline w-full"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>

      </div>

      {/* PURE CSS (NO TAILWIND PLUGIN NEEDED) */}
      <style>{`
        .img-box {
          position: relative;
          width: 100%;
          padding-top: 75%; /* 4:3 ratio */
          overflow: hidden;
          border-radius: 12px;
        }

        .img-fill {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .group:hover .img-fill {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.25);
          transition: background 0.3s;
        }

        .group:hover .overlay {
          background: rgba(0,0,0,0.4);
        }

        .caption {
          position: absolute;
          bottom: 12px;
          left: 12px;
          color: #fff;
        }

        .caption p {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .caption h3 {
          font-size: 14px;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
