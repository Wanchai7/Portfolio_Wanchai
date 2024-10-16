import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        \<p>Wanchai Chiangfung</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#About">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#Project">Project</a>
          </li>
          <li className="footer_menu_list">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <div className="social_icons">
          <div className="icon">
            <a
              href="https://www.instagram.com/wxnchxi._?igsh=MWw2bnV4dWZtZnM2Nw==

"
            >
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/share/wSgjnsyDJtt1sTQj/?mibextid=qi2Omg">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Wanchai7">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>
          {/* &nbsp; คือ ตัวเว้นระยะ */}
          Copyright &copy; &nbsp;
          <a href="#home" style={{ texdecoration: "none" }}>
            Wanchai
          </a>
          -All rights reserved;
        </p>
      </div>
    </footer>
  );
}

export default Footer