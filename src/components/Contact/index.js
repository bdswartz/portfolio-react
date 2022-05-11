import React, { useState } from 'react';
import phone from '../../assets/images/mobile-phone-8-256.png'
import emailIcon from '../../assets/images/email-icon-ampersand.png'
import github from '../../assets/images/github-icon-transparent.png'
import linkedin from '../../assets/images/linkedin-logo-png-1826.png'
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
<section className="dark-to-light-section contact-info-section container">
{/* <h1>Contact me</h1> */}
  <div className='row' style={{width:'90%'}}>
    <div className="contact-master-flex col m12 l6">
    <div className="contact-flex-container">
      <div className="contact-icon-container">
        <a href="tel:+5158686601">
          <img className="contact-icon-image" src={phone} alt="phone icon"/>
        </a>
      </div>
      <div className="contact-invite">
        <a href="tel:+5158686601">
            <h4>Phone</h4>
            <p>
            Please feel free to contact me by phone or text at (515) 868-6601.
            </p>
        </a>
      </div>
    </div>

    <div className="contact-flex-container">
        <div className="contact-icon-container">
          <a href="mailto: briandswartz@outlook.com" target="_blank">
            <img className="contact-icon-image" src={emailIcon} alt="email icon"/>
          </a>
        </div>
        <div className="contact-invite">
          <a href="mailto: briandswartz@outlook.com" target="_blank">
              <h4>Email</h4>
              <p>
              Please feel free to contact me by email at briandswartz@outlook.com
              </p>
          </a>
        </div>
      </div>
      <div className="contact-flex-container">
          <div className="contact-icon-container">
              <a href="https://www.linkedin.com/in/brian-d-swartz/" target="_blank">
                  <img className="contact-icon-image" src={linkedin} alt="LinkedIn logo"/>
              </a>
          </div>
          <div className="contact-invite">
              <a href="https://www.linkedin.com/in/brian-d-swartz/" target="_blank">
                  <h4>LinkedIn</h4>
                  <p>
                  ...or visit my LinkedIn page for more details on my previous work experience.
                  </p>
              </a>
          </div>
      </div>
      <div className="contact-flex-container">
          <div className="contact-icon-container">
              <a href="https://github.com/bdswartz" target="_blank">
              <img className="contact-icon-image" src={github} alt="GitHub logo"/>
              </a>
          </div>
          <div className="contact-invite">
              <a href="https://github.com/bdswartz" target="_blank">
                  <h4>GitHub</h4> 
                  <p>
                  ...or feel free to browse what I have been doing lately at my GitHub page.
                  </p>
              </a>
          </div>
      </div>
    </div>
    <form className=" col m12 l6" id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <button data-testid="button" type="submit">Submit</button>
    </form>
  </div>
</section>
  );
}

export default ContactForm;
