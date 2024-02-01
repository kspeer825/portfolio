import React from 'react';
import CSS from 'csstype';


function ContactContent() {
  const email: string = "kyle.d.speer@gmail.com"
  const mailTo: string = `mailto:${email}?subject=""&body=""`

  return (
    <>
      <p>
      </p>
      <p>
        <h3>Contact Info:</h3>
        I am always open to hearing about new opportunities!
        <br /><br />
        Email: <a href={mailTo}>{email}</a><br />
        LinkedIn: <a href="https://www.linkedin.com/in/kyle-d-speer">/kyle-d-speer</a><br />
        Github: <a href="https://github.com/kspeer825">/kspeer825</a><br />


      </p>
    </>
  );
}

export default ContactContent;
