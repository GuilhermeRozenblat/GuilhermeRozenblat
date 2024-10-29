import React, { useState, useEffect, useRef } from "react";
import "./Work.css";
import flutterLogo from "../../assets/fluttericon.png";
import firebaseLogo from "../../assets/firebase.png";
import AndroidStudioLogo from "../../assets/android-studio-icon.png";
import PlayStoreLogo from "../../assets/icons8-google-play-144.png";
import UPPESLogo from "../../assets/Uppes_logo_512x512.png";


import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

const Work = () => {
  const [showMore, setShowMore] = useState(false);
  

  const containerRef = useRef(null); // Referência para o container-animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const img1 = entry.target.querySelector(".img1");
          const img2 = entry.target.querySelector(".img2");
          const img3 = entry.target.querySelector(".img3");
          const img4 = entry.target.querySelector(".img4");
          const img5 = entry.target.querySelector(".img5");
          if (entry.isIntersecting) {
            // Ativar a animação quando o container estiver visível
            img1.classList.add("animate1");
            img2.classList.add("animate2");
            img3.classList.add("animate3");
            img4.classList.add("animate4");
            img5.classList.add("animate5");
          } else {
            // Remover a classe de animação quando o container sair de vista
            img1.classList.remove("animate1");
            img2.classList.remove("animate2");
            img3.classList.remove("animate3");
            img4.classList.remove("animate4");
            img5.classList.remove("animate5");
          }
        });
      },
      {
        threshold: 0.4, // Ativa a animação quando 50% do container está visível
      }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <section id="work" className="work-section">
      <h2 className="section-title">Work.</h2>

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
                for asset cataloging, built with Flutter and Firebase, featuring
                real-time database, QR code scanning for asset registration, and
                search/filter capabilities. It includes PDF generation and an
                admin panel for employee management. Firebase handles
                authentication, data management, and hosting. Available on Play
                Store and Web.
              </p>
            </div>

            <div className="techs">
              <div className="tech">
                <img src={flutterLogo} alt="Flutter" className="tech-logo" />
                <p>Flutter</p>
              </div>
              <div className="tech">
                <img src={firebaseLogo} alt="Firebase" className="tech-logo" />
                <p>Firebase</p>
              </div>

              <div className="tech">
                <img
                  src={AndroidStudioLogo}
                  alt="Android Studio"
                  className="tech-logo"
                />
                <p>Android Studio</p>
              </div>
              <div className="tech">
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
      </div>

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
