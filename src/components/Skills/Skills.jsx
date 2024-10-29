import React from "react";
import "./Skills.css";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
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



import c from "../../assets/c.png";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1 className="section-title">Skills.</h1>
      <div class="parent">
        <div class="div1">

          <div className="subtitle">
            <div className="iconsubtitle">
            <FaCode />

            </div>
            <div className="textsubtitle">
              <h2>Programming <br /> Languages</h2>
            </div>
          </div>
          <div className="container-items">
            <ul>
              <li>
                <div className="icontech">
                  <FaPython />
                </div>
                <p>Python</p>
              </li>
              <li>
                <div className="icontech">
                  <SiDart />
                </div>
                <p>Dart</p>
              </li>
              <li>
                <div className="icontech">
                  <RiJavascriptFill />
                </div>
                <p>JavaScript</p>
              </li>
              <li>
                <div className="icontech">
                  <FaHtml5 />
                </div>
                <p>HTML</p>
              </li>
              <li>
                <div className="icontech">
                  <FaJava />
                </div>
                <p>Java</p>
              </li>
              <li>
                <div className="icontech">
                  <img src={c} alt="c" />
                </div>
                <p>C</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="div2">
        <div className="subtitle">
            <div className="iconsubtitle">
            <SiFramework />


            </div>
            <div className="textsubtitle">
              <h2>Technologies & <br /> Frameworks</h2>
            </div>
          </div>
          <div className="container-items">
            <ul>
              <li>
                <div className="icontech">
                  <SiFlutter />
                </div>
                <p>Flutter</p>
              </li>
              <li>
                <div className="icontech">
                  <FaReact />
                </div>
                <p>React</p>
              </li>
              <li>
                <div className="icontech">
                  <SiNestjs />
                </div>
                <p>NestJS</p>
              </li>
              <li>
                <div className="icontech">
                  <FaDocker />
                </div>
                <p>Docker</p>
              </li>
              <li>
                <div className="icontech">
                  <SiPostman />
                </div>
                <p>Postman</p>
              </li>
              <li>
                <div className="icontech">
                <DiAndroid />

                </div>
                <p>Android Studio</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="div3">
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
                <p>Firebase</p>
              </li>
              <li>
                <div className="icontech">
                  <RiSupabaseFill />
                </div>
                <p>Supabase</p>
              </li>
              <li>
                <div className="icontech">
                  <PiFileSqlDuotone />
                </div>
                <p>SQL</p>
              </li>
              <li>
                <div className="icontech">
                  <GrMysql />
                </div>
                <p>MySQL</p>
              </li>
              <li>
                <div className="icontech">
                  <SiPostgresql />
                </div>
                <p>PostgreSQL</p>
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
        <div class="div4">
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
                  <SiPowerbi />
                </div>
                <p>Power BI</p>
              </li>
              <li>
                <div className="icontech">
                  <FaFileExcel />
                </div>
                <p>Excel
                </p>
              </li>
              <li>
                <div className="icontech">
                  <FaFilePowerpoint />
                </div>
                <p>PowerPoint</p>
              </li>
              <li>
                <div className="icontech">
                  <FaFileWord />
                </div>
                <p>Word</p>
              </li>
              
              <li>
                <div className="icontech">
                  <SiAdobephotoshop />
                </div>
                <p>Photoshop</p>
              </li>
              <li>
                <div className="icontech">
                  <SiJira />
                </div>
                <p>Jira</p>
              </li>
              <li>
                <div className="icontech">
                  <FaTrello />
                </div>
                <p>Trello</p>
              </li>
              <li>
                <div className="icontech">
                  <FaGooglePlay />
                </div>
                <p>Google Play Console
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
