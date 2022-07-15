import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contactform = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <><form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="form"
    >
      <div className="names">
      <div>
        <label htmlFor="">First Name</label><br />
        <input type="text" placeholder="Surname Please" name="firstName" required />
      </div>
      <div>
      <label htmlFor="">Last Name</label><br />
        <input type="text" placeholder="Good! Now, Your name" name="lastName" required />
      </div>
      </div>
      <div>
      <label htmlFor="">Email Address</label><br />
        <input type="email" placeholder="Your working E-mail" name="email" required />
      </div>
      <div>
      <label htmlFor="">Your Message</label><br />
        <textarea placeholder="Be as detailed as possibe, as that willbhelp us to help you, you can also expand the Text area if need be" name="message" required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form></>
  );
};

export default Contactform;