import React from 'react'

const ContactBox = () => {
  return (
    <section className="section" id="Contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find Me <i className="uil uil -cornrt-right-down"></i>
            </h2>
            <p>
              <i className="uil uil-envelop"></i>
              Email:wanchai.view47@gmail.com
            </p>
            <p>
              <i className="uil ui phon"></i>
              Tel: +66 95 508 9153
            </p>
          </div>
        </div>
        <div className="col">
          <div className="form-control">
            <div className="form-inputs">
              <input type="text" className="input-field" placeholder="name" />
              <input type="email" className="input-field" placeholder="email" />
            </div>
            <div className="text-area">
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="form-button">
              <button className="btn">
                Send <i className="uil uil-message"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBox
