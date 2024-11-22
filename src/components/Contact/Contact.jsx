import "./Contact.css";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import video4new2 from "../../assets/video4new2.mp4";
import video4new2v3 from "../../assets/video4new2v3.mp4";

const Contact = () => {
  const [videoSrc, setVideoSrc] = useState(video4new2); // Padrão para desktop

  useEffect(() => {
    // Detecta o tamanho da tela e ajusta a fonte de vídeo
    const selectVideoSource = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc(video4new2v3); // Versão de baixa resolução para mobile
      } else {
        setVideoSrc(video4new2); // Versão de alta resolução para desktop
      }
    };

    selectVideoSource(); // Configura o vídeo na carga inicial
    window.addEventListener("resize", selectVideoSource);

    return () => window.removeEventListener("resize", selectVideoSource);
  }, []);

  useEffect(() => {
    // Ajusta a altura da aplicação para excluir a barra de navegação em dispositivos móveis
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };

    // Define a altura ao carregar a página e redimensionar a tela
    setAppHeight();
    window.addEventListener("resize", setAppHeight);

    return () => window.removeEventListener("resize", setAppHeight);
  }, []);
  return (
    <section id="contact" className="contact-section">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="background-video-contact"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="filter-contact"></div>
      <h1 className="section-title-contact">Contact.</h1>

      <div className="topo-contact">
        <div className="subtitle-contact">
          <div className="planeicon">
            <SiMinutemailer />
          </div>
          <p>feel free to get in touch.</p>
        </div>

        <div className="botoes-contact">
          <div className="linha1">
            <button className="botao-contact">
              <a href="mailto:gui.rozenblat@gmail.com" target="_blank">
                <div className="icone">
                  <div className="icone-box">
                    <SiGmail />
                  </div>
                </div>
                <div className="box">
                  <p>gui.rozenblat@gmail.com</p>
                </div>
              </a>
            </button>
            <button className="botao-contact">
              <a href="https://wa.me/5521985143731" target="_blank">
                <div className="icone">
                  <div className="icone-box">
                    <FaWhatsapp />
                  </div>
                </div>
                <div className="box">
                  <p>+55 21985143731</p>
                </div>
              </a>
            </button>
          </div>

          <button className="botao-contact">
            <a
              href="https://www.linkedin.com/in/guilherme-rozenblat/"
              target="_blank"
            >
              <div className="icone">
                <div className="icone-box">
                  <FaLinkedin />
                </div>
              </div>
              <div className="box">
                <p>https://www.linkedin.com/in/guilherme-rozenblat/</p>
              </div>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
