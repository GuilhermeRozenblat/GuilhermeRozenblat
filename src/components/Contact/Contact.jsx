import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import video4new2 from "../../assets/video4new2.mp4";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <video autoPlay loop muted playsInline className="background-video-contact">
        <source src={video4new2} type="video/mp4" />
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
