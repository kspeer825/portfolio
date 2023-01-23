import React from 'react';
import CSS from 'csstype';


function ContactContent() {
  const linkStyling: CSS.Properties = {
    color: "#F4F3EE"
  }
  const email: string = "kyle.d.speer@gmail.com"
  const mailTo: string = `mailto:${email}?subject=""&body=""`

  return (
    <>
      <p>
        <br /><br />
        I am always open to hearing aobut new opportunites.<br />
        Feel free to send me a message!
      </p>
      <p>
        <h3>Contact Info</h3>
        Email: <a style={linkStyling} href={mailTo}>{email}</a><br />
        LinkedIn: <a style={linkStyling} href="https://www.linkedin.com/in/kyle-d-speer">/kyle-d-speer</a><br />
        Github: <a style={linkStyling} href="https://github.com/kspeer825">/kspeer825</a><br />


      </p>
    </>
  );
}

export default ContactContent;
