import React, { useState, useEffect } from 'react';
import classes from './Contact.Module.css';
import Github from '../images/github.svg';
import Linkedin from '../images/linkedin.svg';
import Facebook from '../images/facebook-f-brands.svg';
import Button from '../components/Button/Button';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const regexEmail = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;

  const [userName, setUserName] = useState({
    value: '',
    className: classes.error,
    success: false,
  });
  const [userEmail, setUserEmail] = useState({
    value: '',
    className: classes.error,
    success: false,
  });
  const [userMessage, setUserMessage] = useState({
    value: '',
    className: classes.error,
    success: false,
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    !userName.value
      ? setUserName({
          ...userName,
          className: `${classes.error} ${classes.showError}`,
          success: false,
        })
      : setUserName({ ...userName, className: classes.error, success: true });

    !userEmail.value.match(regexEmail)
      ? setUserEmail({
          ...userEmail,
          className: `${classes.error} ${classes.showError}`,
          success: false,
        })
      : setUserEmail({ ...userEmail, className: classes.error, success: true });

    !userMessage.value
      ? setUserMessage({
          ...userMessage,
          className: `${classes.error} ${classes.showError}`,
          success: false,
        })
      : setUserMessage({
          ...userMessage,
          className: classes.error,
          success: true,
        });

    userName.success && userEmail.success && userMessage.success
      ? setSuccessMessage(true)
      : setSuccessMessage(false);

    console.log(userName.success);
    console.log(userEmail.success);
    console.log(userMessage.success);
  };

  return (
    <main className={classes.contact__container}>
      <section className={classes.text__container}>
        <h1>Get In Touch</h1>
        <div>
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in Vilnius. But I’m also happy to hear about opportunities
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className={classes.icons__container}>
            <a
              href="https://github.com/KasparasDijokas"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Github} alt="Github" />
            </a>
            <a
              href="https://www.facebook.com/kasparas.dijokas/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/kasparas-dijokas-37620219a/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>
      </section>
      <section className={classes.form__container}>
        <h1>Contact Me</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            onChange={(e) =>
              setUserName({
                ...userName,
                value: e.target.value,
              })
            }
          ></input>
          <p className={userName.className}>Please enter your name</p>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            onChange={(e) =>
              setUserEmail({
                ...userEmail,
                value: e.target.value,
              })
            }
          ></input>
          <p className={userEmail.className}>Please enter valid Email</p>
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="How I can help?"
            name="message"
            rows="8"
            onChange={(e) =>
              setUserMessage({
                ...userMessage,
                value: e.target.value,
              })
            }
          ></textarea>
          <p className={userMessage.className}>Please enter your question</p>
          <Button secondary={'true'} onClick={formHandler}>
            Send Message
          </Button>
        </form>
        <p
          className={
            successMessage
              ? `${classes.success} ${classes.show}`
              : classes.success
          }
        >
          Thank you! I will contact you as soon as possible!
        </p>
      </section>
    </main>
  );
};

export default Contact;
