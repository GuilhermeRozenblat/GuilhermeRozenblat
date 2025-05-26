import "./Skills.css";
import {
  FaPython,
  FaHtml5,
  FaJava,
  FaReact,
  FaDocker,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord,
  FaTrello,
  FaTools,
  FaCode,
  FaNodeJs,
  FaFigma,
  FaGooglePlay,
  FaProjectDiagram,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiDart,
  SiPostgresql,
  SiFlutter,
  SiNestjs,
  SiPostman,
  SiAdobephotoshop,
  SiJira,
  SiPowerbi,
  SiFramework,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { DiAndroid, DiMsqlServer } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import { TbBrandElastic } from "react-icons/tb";

import c from "../../assets/c.png";
import csharp from "../../assets/csharp.png";
import dotnet from "../../assets/dotnet.svg";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1 className="section-title">Skills.</h1>
      <div className="parent">
        {/* 1. Programming Languages */}
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
                  <img src={csharp} alt="c#" />
                </div>
                <p className="notranslate">C#</p>
              </li>
              <li>
                <div className="icontech">
                  <RiJavascriptFill />
                </div>
                <p className="notranslate">JavaScript/TypeScript</p>
              </li>
              <li>
                <div className="icontech">
                  <FaJava />
                </div>
                <p className="notranslate">Java</p>
              </li>
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
                  <FaHtml5 />
                </div>
                <p className="notranslate">HTML</p>
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

        {/* 2. Frameworks & Development Technologies */}
        <div className="div2">
          <div className="subtitle">
            <div className="iconsubtitle">
              <SiFramework />
            </div>
            <div className="textsubtitle">
              <h2>
                Frameworks & <br /> Development Technologies
              </h2>
            </div>
          </div>
          <div className="container-items">
            <ul>
              <li>
                <div className="icontech">
                  <img src={dotnet} alt=".NET" />
                </div>
                <p className="notranslate">.NET</p>
              </li>
              <li>
                <div className="icontech">
                  <FaReact />
                </div>
                <p className="notranslate">React</p>
              </li>
              <li>
                <div className="icontech">
                  <FaNodeJs />
                </div>
                <p className="notranslate">Node.js</p>
              </li>
              <li>
                <div className="icontech">
                  <SiFlutter />
                </div>
                <p className="notranslate">Flutter</p>
              </li>
              <li>
                <div className="icontech">
                  <SiNestjs />
                </div>
                <p className="notranslate">NestJS</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Databases & Modeling */}
        <div className="div3">
          <div className="subtitle">
            <div className="iconsubtitle">
              <FaDatabase />
            </div>
            <div className="textsubtitle">
              <h2>Databases & Modeling</h2>
            </div>
          </div>
          <div className="container-items">
            <ul>
              <li>
                <div className="icontech">
                  <DiMsqlServer />
                </div>
                <p className="notranslate">SQL Server</p>
              </li>
              <li>
                <div className="icontech">
                  <IoLogoFirebase />
                </div>
                <p className="notranslate">Firebase</p>
              </li>
              <li>
                <div className="icontech">
                  <SiPostgresql />
                </div>
                <p className="notranslate">PostgreSQL</p>
              </li>
              <li>
                <div className="icontech">
                  <GrMysql />
                </div>
                <p className="notranslate">MySQL</p>
              </li>
              <li>
                <div className="icontech">
                  <FaDatabase />
                </div>
                <p>Conceptual, Logical & Physical Database Modeling</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. DevOps & Development Tools */}
        <div className="div4">
          <div className="subtitle">
            <div className="iconsubtitle">
              <FaTools />
            </div>
            <div className="textsubtitle">
              <h2>DevOps & Development Tools</h2>
            </div>
          </div>
          <div className="container-items">
            <ul>
              <li>
                <div className="icontech">
                  <VscAzureDevops />
                </div>
                <p className="notranslate">Azure DevOps</p>
              </li>
              <li>
                <div className="icontech">
                  <FaDocker />
                </div>
                <p className="notranslate">Docker</p>
              </li>
              <li>
                <div className="icontech">
                  <TbBrandElastic />
                </div>
                <p className="notranslate">Elastic</p>
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
              <li>
                <div className="icontech">
                  <FaGooglePlay />
                </div>
                <p className="notranslate">Google Play Console</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 5. Collaboration, Design & Productivity */}
        <div className="final">
          <div className="div4">
            <div className="subtitle">
              <div className="iconsubtitle">
                <FaProjectDiagram />
              </div>
              <div className="textsubtitle">
                <h2>Collaboration, Design & Productivity</h2>
              </div>
            </div>
            <div className="container-items">
              <ul>
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
                    <FaFigma />
                  </div>
                  <p className="notranslate">Figma</p>
                </li>
                <li>
                  <div className="icontech">
                    <SiAdobephotoshop />
                  </div>
                  <p className="notranslate">Photoshop</p>
                </li>
                <li>
                  <div className="icontech">
                    <FaFileExcel />
                  </div>
                  <p className="notranslate">Excel</p>
                </li>
                <li>
                  <div className="icontech">
                    <SiPowerbi />
                  </div>
                  <p className="notranslate">Power BI</p>
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
              </ul>
            </div>
          </div>
        </div>
      </div>{" "}
      
      {/* end parent */}
    </section>
  );
};

export default Skills;
