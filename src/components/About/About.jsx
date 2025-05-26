import "./About.css"; // Estilos separados para a seção
import { LuDownload } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import GuiAbout from "../../assets/guinew.png";
import GuilhermeCV from "../../assets/Guilherme Rozenblat - CV - EN.pdf";

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
                    I’m a <span>Computer Science</span> undergraduate at
                    <span> Federal Fluminense University (UFF)</span> and a
                    <span> Full Stack Developer</span> specializing in
                    <span> data-driven, cross-platform solutions</span>.
                  </p>
                </div>

                <div className="texto">
                  <p>
                    I have hands-on experience with
                    <span> C#</span>, <span>.NET</span>, <span>Node.js</span>,
                    <span> React</span>, <span>Flutter</span>,{" "}
                    <span>Firebase</span> and
                    <span> SQL/NoSQL databases</span> (<span>SQL Server</span>,{" "}
                    <span>PostgreSQL</span>,<span> MySQL</span>,{" "}
                    <span>Firebase</span>).
                  </p>
                </div>

                <div className="texto">
                  <p>
                    I’ve contributed across the full software lifecycle—from
                    requirements gathering and architectural design to
                    implementation, deployment and maintenance—building features
                    such as user authentication, real-time data synchronization
                    and API integrations. I thrive on challenges, continuously
                    leveling up my skills and delivering scalable, efficient
                    applications that drive business value.
                  </p>
                </div>
              </div>
              <div className="botoes">
                <button className="btn">
                  <a
                    href="https://docs.google.com/document/d/1-1Izyfy08Zo-bAl1r0wsJ8ENN3Lkx_IxJwTtwc3uIMY/edit?usp=sharing"
                    target="_blank"
                  >
                    <p>Online CV</p>
                    <LuExternalLink />
                  </a>
                </button>

                {/*<button className="btn">
                  <a href={GuilhermeCV} download className="btn">
                    <p>Download CV</p>
                    <LuDownload />
                  </a>
                </button>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
