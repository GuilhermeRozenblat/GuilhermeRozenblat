import React from "react";
import "./About.css"; // Estilos separados para a seção
import { LuDownload } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import GuiAbout from "../../assets/guifotoaboutcut3.jpg";
import GuilhermeCV from "../../assets/Guilherme-Rozenblat-CV-EN.pdf";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="section-title">About.</h1>
      <div className="about-content">
        <div className="about-container">
          <div className="conteudo">
            <div className="imagem">
              <img src={GuiAbout} alt="Guiprofile" />
            </div>
            <div className="baixo">
              <div className="textos">
                <div className="texto">
                  <p>
                    My name is <span>Guilherme Rozenblat</span>, and I am a{" "}
                    <span>Computer Science </span>
                    student at Universidade Federal Fluminense (UFF) in Rio de
                    Janeiro, Brazil, as well as a{" "}
                    <span>Full-Stack Developer </span>
                    specializing in multi-platform applications, solutions, and
                    data-driven technological transformations.
                  </p>
                </div>
                <div className="texto">
                  <p>
                    I design and develop{" "}
                    <span>mobile and web applications</span> using technologies
                    such as{" "}
                    <span>
                      Flutter, React, Firebase, NestJS and PostgreSQL.
                    </span>{" "}
                    I lead the entire software development life cycle, from
                    conception to implementation, including maintenance,
                    database management, and deployment on the Google Play
                    Store.
                  </p>
                </div>
                <div className="texto">
                  <p>
                    My expertise includes implementing functionalities such as
                    user authentication, real-time data management, and seamless
                    integration with database services.
                  </p>
                </div>
              </div>
              <div className="botoes">
                <button className="btn">
                  <a href="https://drive.google.com/file/d/1YYuHtgJuLwU1lGsI3m9OfdGpLQuCJywu/view?usp=sharing" target="_blank">
                    <p>Online CV</p>
                    <LuExternalLink />
                  </a>
                </button>

                <button className="btn">
                  <a href={GuilhermeCV} download className="btn">
                    <p>Download CV</p>
                    <LuDownload />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
