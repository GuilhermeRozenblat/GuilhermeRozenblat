import { useEffect, useRef } from "react";
import "./Work.css";
import flutterLogo from "../../assets/fluttericon.png";
import firebaseLogo from "../../assets/firebase.png";
import AndroidStudioLogo from "../../assets/android-studio-icon.png";
import PlayStoreLogo from "../../assets/icons8-google-play-144.png";
import UPPESLogo from "../../assets/Uppes_logo_512x512.png";

import SYSLogo from "../../assets/syslogo.png";

import reactLogo from "../../assets/react.png";
import nodeLogo from "../../assets/node.png";
import ExpressLogo from "../../assets/express.png";
import mySqlLogo from "../../assets/mysql.png";

/*UPPES*/
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

/*SYS*/
import sys1 from "../../assets/print1.png";
import sys2 from "../../assets/print2.png";
import sys3 from "../../assets/print3.jpg";
import sys4 from "../../assets/print4.jpg";
import sys5 from "../../assets/print5.jpg";

const Work = () => {
  const containerRef = useRef(null); // Referência para o container-animation

  useEffect(() => {
    const containers = document.querySelectorAll(".container-animation");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const imgs = entry.target.querySelectorAll(
            ".img1, .img2, .img3, .img4, .img5"
          );
          if (entry.isIntersecting) {
            // Ativar as animações para as imagens visíveis
            imgs.forEach((img, index) => {
              img.classList.add(`animate${index + 1}`);
            });
          } else {
            // Remover as animações quando o container sair de vista
            imgs.forEach((img, index) => {
              img.classList.remove(`animate${index + 1}`);
            });
          }
        });
      },
      {
        threshold: 0.4, // Ativa a animação quando 40% do container está visível
      }
    );

    // Observar todos os containers de animação
    containers.forEach((container) => {
      observer.observe(container);
    });

    return () => {
      containers.forEach((container) => {
        observer.unobserve(container);
      });
    };
  }, []);

  return (
    <section id="work" className="work-section">
      <h2 className="section-title">Work.</h2>

      <div className="uppesSection">
        <div className="topo">
          <img src={UPPESLogo} alt="" />
          <div className="titulo-proj">
            <h1>UPPES Patrimônio</h1>
            <p>Android and Web</p>
          </div>
        </div>
        <div className="work-card">
          <div className="container-animation" ref={containerRef}>
            <div className="img1">
              <img src={img1} alt="" />
            </div>
            <div className="img2">
              <img src={img2} alt="" />
            </div>
            <div className="img3">
              <img src={img3} alt="" />
            </div>
            <div className="img4">
              <img src={img4} alt="" />
            </div>
            <div className="img5">
              <img src={img5} alt="" />
            </div>
          </div>

          <div className="meio">
            {/* Carrossel de imagens */}
            {/* <div className="galeria-total">
            <div className="gallery">
              <i
                className="fas fa-chevron-left gallery-btn prev-btn"
                onClick={prevSlide}
                style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
              ></i>

              <div className="gallery-container">
                {galleryData.map((item, idx) => {
                  return (
                    <img
                      src={item.src}
                      alt={item.alt}
                      key={idx}
                      className={`gallery-image ${
                        slide === idx ? "active" : ""
                      }`}
                      style={{ transform: `translateX(-${slide * 100}%)` }}
                    />
                  );
                })}
              </div>

              <i
                className="fas fa-chevron-right gallery-btn next-btn"
                onClick={nextSlide}
                style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
              ></i>
            </div>

            {/* Indicadores do carrossel 
            <div className="carousel-indicators">
              {galleryData.map((_, idx) => (
                <span
                  key={idx}
                  className={
                    slide === idx ? "indicator active-indicator" : "indicator"
                  }
                  onClick={() => setSlide(idx)}
                ></span>
              ))}
            </div>
          </div> */}

            {/* Descrição do projeto */}
            <div className="work-description">
              <div className="description">
                <p>
                  A cross-platform <span>Web </span>and <span>Mobile </span>app
                  for asset cataloging, built with <span>Flutter</span> and{" "}
                  <span>Firebase</span>, featuring real-time database, QR code
                  scanning for asset registration, and search/filter
                  capabilities. It includes PDF generation and an admin panel
                  for employee management. Firebase handles authentication, data
                  management, and hosting. Available on Play Store and Web.
                </p>
              </div>

              <div className="techs">
                <div className="tech notranslate">
                  <img src={flutterLogo} alt="Flutter" className="tech-logo" />
                  <p>Flutter</p>
                </div>
                <div className="tech notranslate">
                  <img
                    src={firebaseLogo}
                    alt="Firebase"
                    className="tech-logo"
                  />
                  <p>Firebase</p>
                </div>
                <div className="tech notranslate">
                  <img
                    src={AndroidStudioLogo}
                    alt="Android Studio"
                    className="tech-logo"
                  />
                  <p>Android Studio</p>
                </div>
                <div className="tech notranslate">
                  <img
                    src={PlayStoreLogo}
                    alt="Google Play"
                    className="tech-logo"
                  />
                  <p>Google Play</p>
                </div>
              </div>
              <div className="features">
                <ul>
                  <li>Real time Database</li>
                  <li>Users can Read, Write, Update and Delete items.</li>
                  <li>QR code scanner to register new items with unique ID.</li>
                  <li>Search and filter items in the catalog.</li>
                  <li>Create and share PDF files.</li>
                  <li>
                    Admin users can manage, create, promote and delete their
                    employees.
                  </li>
                  <li>
                    Firebase database, authentication with email and password
                    and app hosting.
                  </li>
                  <li>Available on Play Store and Web.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SYS Section */}
      <div className="sysSection">
        <div className="topo">
          <img src={SYSLogo} alt="" />
          <div className="titulo-proj">
            <h1>SyStudio</h1>
            <p>Web Platform</p>
          </div>
        </div>
        <div className="work-card">
          <div className="container-animation" ref={containerRef}>
            <div className="img1">
              <img src={sys2} alt="" />
            </div>
            <div className="img2">
              <img src={sys5} alt="" />
            </div>
            <div className="img3">
              <img src={sys1} alt="" />
            </div>
            <div className="img4">
              <img src={sys4} alt="" />
            </div>
            <div className="img5">
              <img src={sys3} alt="" />
            </div>
          </div>

          <div className="meio">
            <div className="work-description">
              <div className="description">
                <p>
                  A <span>Web</span> app designed for a dance school, focusing
                  on student and class management, built with <span>React</span>
                  , <span>Node.js</span> and <span>MySQL</span>. Features
                  include student tracking, real-time evaluations, generating
                  certificates, and report cards with detailed assessments. It
                  also supports role-based access and authentication via JWT,
                  with React Context managing state. Designed to automate tasks
                  in a dynamic, practical, and fast way.
                </p>
              </div>

              <div className="techs">
                <div className="tech notranslate">
                  <img src={reactLogo} alt="React" className="tech-logo" />
                  <p>React</p>
                </div>
                <div className="tech notranslate">
                  <img src={nodeLogo} alt="Node.js" className="tech-logo" />
                  <p>Node.js</p>
                </div>
                <div className="tech notranslate">
                  <img src={ExpressLogo} alt="Express" className="tech-logo" />
                  <p>Express.js</p>
                </div>
                <div className="tech notranslate">
                  <img src={mySqlLogo} alt="Database" className="tech-logo" />
                  <p>MySQL</p>
                </div>
              </div>
              <div className="features">
                <ul>
                  <li>Management of students and classes.</li>
                  <li>Registration and review of evaluations.</li>
                  <li>Detailed performance reports.</li>
                  <li>Secure login with JWT authentication.</li>
                  <li>Permissions for teachers and administrators.</li>
                  <li>Association of students to classes.</li>
                  <li>Generation of certificates and report cards.</li>
                  <li>Protected routes for restricted access.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*     
        <div className="more-info-btn-container">
          <button className="more-info-btn" onClick={handleToggleMore}>
            {showMore ? "Show less" : "Show more"}
            <div
              className={`arrow ${showMore ? "up-arrow" : "down-arrow"}`}
            ></div>
          </button>
        </div>
        */}

      {/* Card adicional com mais informações */}
      {/*
      {showMore && (
        <div className="extra-info-card">
          <div className="features">
            <h4>Features</h4>
            <ul>
              <li>Real time Database</li>
              <li>Users can Read, Write, Update and Delete items</li>
              <li>QR code scanner to register new items with unique ID</li>
              <li>Search and filter items in the catalog</li>
              <li>Create and share PDF files</li>
              <li>
                Admin users can manage, create, promote and delete their
                employees
              </li>
              <li>
                Firebase database, authentication with email and password and
                app hosting
              </li>
              <li>Available on Play Store and Web</li>
            </ul>
          </div>

          <img src={Plaqueta} alt="" />
        </div>
      )}
        */}
    </section>
  );
};

export default Work;
