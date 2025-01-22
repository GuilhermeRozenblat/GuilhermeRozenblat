import "./Skills.css";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { PiFileSqlDuotone } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { FaGooglePlay } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { FaFilePowerpoint } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiFramework } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

import c from "../../assets/c.png";
import csharp from "../../assets/csharp.png";
import dotnet from "../../assets/dotnet.svg";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1 className="section-title">Skills.</h1>
      <div className="parent">
        <div className="div1">
          <div className="subtitle">
            <div className="iconsubtitle">
              <FaCode />
            </div>
            <div className="textsubtitle">
              <h2>
                Programming <br /> Languages
              </h2>
            </div>
          </div>
          <div className="container-items">
            <ul>
              <li>
                <div className="icontech">
                  <FaPython />
                </div>
                <p className="notranslate">Python</p>
              </li>
              <li>
                <div className="icontech">
                  <SiDart />
                </div>
                <p className="notranslate">Dart</p>
              </li>
              <li>
                <div className="icontech">
                  <RiJavascriptFill />
                </div>
                <p className="notranslate">JavaScript</p>
              </li>
              <li>
                <div className="icontech">
                  <img src={csharp} alt="c#" />
                </div>
                <p className="notranslate">C#</p>
              </li>
              <li>
                <div className="icontech">
                  <FaHtml5 />
                </div>
                <p className="notranslate">HTML</p>
              </li>
              <li>
                <div className="icontech">
                  <FaJava />
                </div>
                <p className="notranslate">Java</p>
              </li>
              <li>
                <div className="icontech">
                  <img src={c} alt="c" />
                </div>
                <p className="notranslate">C</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="div2">
          <div className="subtitle">
            <div className="iconsubtitle">
              <SiFramework />
            </div>
            <div className="textsubtitle">
              <h2>
                Technologies & <br /> Frameworks
              </h2>
            </div>
          </div>
          <div className="container-items">
            <ul>
              <li>
                <div className="icontech">
                  <SiFlutter />
                </div>
                <p className="notranslate">Flutter</p>
              </li>
              <li>
                <div className="icontech">
                  <FaReact />
                </div>
                <p className="notranslate">React</p>
              </li>
              <li>
                <div className="icontech">
                  <img src={dotnet} alt="" />
                </div>
                <p className="notranslate">.NET</p>
              </li>
              <li>
                <div className="icontech">
                  <FaNodeJs />
                </div>
                <p className="notranslate">NodeJs</p>
              </li>
              <li>
                <div className="icontech">
                  <SiNestjs />
                </div>
                <p className="notranslate">NestJs</p>
              </li>
              <li>
                <div className="icontech">
                  <FaDocker />
                </div>
                <p className="notranslate">Docker</p>
              </li>
              <li>
                <div className="icontech">
                  <SiPostman />
                </div>
                <p className="notranslate">Postman</p>
              </li>
              <li>
                <div className="icontech">
                  <DiAndroid />
                </div>
                <p className="notranslate">Android Studio</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="div3">
          <div className="subtitle">
            <div className="iconsubtitle">
              <FaDatabase />
            </div>
            <div className="textsubtitle">
              <h2>Databases</h2>
            </div>
          </div>
          <div className="container-items">
            <ul>
              <li>
                <div className="icontech">
                  <IoLogoFirebase />
                </div>
                <p className="notranslate">Firebase</p>
              </li>
              <li>
                <div className="icontech">
                  <RiSupabaseFill />
                </div>
                <p className="notranslate">Supabase</p>
              </li>
              <li>
                <div className="icontech">
                  <PiFileSqlDuotone />
                </div>
                <p className="notranslate">SQL</p>
              </li>
              <li>
                <div className="icontech">
                  <GrMysql />
                </div>
                <p className="notranslate">MySQL</p>
              </li>
              <li>
                <div className="icontech">
                  <SiPostgresql />
                </div>
                <p className="notranslate">PostgreSQL</p>
              </li>
              <li>
                <div className="icontech">
                  <DiMsqlServer />
                </div>
                <p className="notranslate">SQLServer</p>
              </li>
              <li>
                <div className="icontech">
                  <FaDatabase />
                </div>
                <p>Conceptual, Logical, and Physical Database Modeling</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="div4">
          <div className="subtitle">
            <div className="iconsubtitle">
              <FaTools />
            </div>
            <div className="textsubtitle">
              <h2>Tools & Platforms</h2>
            </div>
          </div>
          <div className="container-items">
            <ul>
              <li>
                <div className="icontech">
                  <FaFigma />
                </div>
                <p className="notranslate">Figma</p>
              </li>
              <li>
                <div className="icontech">
                  <SiPowerbi />
                </div>
                <p className="notranslate">Power BI</p>
              </li>
              <li>
                <div className="icontech">
                  <FaFileExcel />
                </div>
                <p className="notranslate">Excel</p>
              </li>
              <li>
                <div className="icontech">
                  <FaFilePowerpoint />
                </div>
                <p className="notranslate">PowerPoint</p>
              </li>
              <li>
                <div className="icontech">
                  <FaFileWord />
                </div>
                <p className="notranslate">Word</p>
              </li>
              <li>
                <div className="icontech">
                  <SiAdobephotoshop />
                </div>
                <p className="notranslate">Photoshop</p>
              </li>
              <li>
                <div className="icontech">
                  <SiJira />
                </div>
                <p className="notranslate">Jira</p>
              </li>
              <li>
                <div className="icontech">
                  <FaTrello />
                </div>
                <p className="notranslate">Trello</p>
              </li>
              <li>
                <div className="icontech">
                  <FaGooglePlay />
                </div>
                <p className="notranslate">Google Play Console</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
