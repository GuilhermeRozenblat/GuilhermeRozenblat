import React from "react";
import "./About.css"; // Estilos separados para a seção
import { LuDownload } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import GuiAbout from "../../assets/guifotoaboutcut3.jpg";
import GuilhermeCV from "../../assets/GuilhermeRozenblat-CV-EN.pdf";

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
                    I am a <span>Computer Science</span> student at the
                    Universidade Federal Fluminense (UFF) and work in software
                    development, particularly in <span>cross-platform applications and
                    data-driven technology solutions.</span>
                  </p>
                </div>
                <div className="texto">
                  <p>
                    I am involved in the entire software development lifecycle,
                    from conception to implementation, maintenance, and database
                    creation. I develop
                    <span> Mobile </span> and <span>Web</span> applications using technologies
                    such as
                    <span> Flutter</span>,<span> React</span>,
                    <span> Firebase</span>,<span> NestJS</span>, and
                    <span> PostgreSQL</span>.
                  </p>
                </div>
                <div className="texto">
                  <p>
                    My implementations include user authentication, real-time
                    data management, and integrations with database services,
                    with a constant focus on building and maintaining efficient,
                    well-integrated applications.
                  </p>
                </div>
              </div>
              <div className="botoes">
                <button className="btn">
                  <a
                    href="https://drive.google.com/file/d/1QXdxQh6yaYPVw9VCG_lWdTqAVq0rmCCv/view?usp=sharing"
                    target="_blank"
                  >
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
