import React from 'react';
import '../footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer__links">
          <li><a href="/">Home</a></li>
          <li><a href="https://polynoe.lib.uniwa.gr/xmlui/">Thesis Repository</a></li>
          <li><a href="https://github.com/christopherkormpos">Docs</a></li>
          <li><a href="/app">App</a></li>
        </ul>
      </nav>
      <div className="footer__icons">
      <a href="https://www.uniwa.gr" target="_blank" rel="noreferrer">
          <img className="footer__icon" src="./images/uniwa.png" alt="Uniwa" />
        </a>
        <a href="https://telsip.uniwa.gr" target="_blank" rel="noreferrer">
          <img className="footer__icon--telsip" src="./images/telsip.png" alt="TelSip" />
        </a>
        <a href="https://www.linkedin.com/in/christopher-kormpos-27808b194/" target="_blank" rel="noreferrer">
          <img className="footer__icon" src="./images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/christopherkormpos" target="_blank" rel="noreferrer">
          <img className="footer__icon" src="./images/github.jpg" alt="Github" />
        </a>
      </div>
      <p className="footer__copy">&copy; Christopher Kormpos Diploma Thesis 2024</p>
    </footer>
  );
}