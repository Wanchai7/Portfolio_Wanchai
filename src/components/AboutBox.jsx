import React from "react";
import cv_view from "../assets/download/view.pdf";

const AboutBox = () => {
  return (
    <section className="section" id="About">
      <div className="top-header">
        <h1>About Me </h1>
      </div>
      <div className="row">
        {/** About me */}
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              สวัสดีฉันชื่อ "วิว" คุณอยากรู้จักฉันใช่หรือไม่
            </p>
            <p></p>
            <div className="about-btn">
              <a href={cv_view} target="_blank">
                <button className="btn">
                  Dowload CV <i className="uil uil-file-alt"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/** Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>Boostrap</span>
              <span>Tailwind</span>
              <span>React</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>Node.js</span>
              <span>JavaScript</span>
              <span>Java</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>Post</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
