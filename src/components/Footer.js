import React from "react";

const Footer = () => {
  return (
    <footer className="py-3 my-4 footer">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="mx-3">
          <i className="fa-brands fa-twitter fa-xl"></i>
        </li>
        <li className="mx-3">
          <i className="fa-brands fa-instagram fa-xl"></i>
        </li>
        <li className="mx-3">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </li>
        <li className="mx-3">
          <i className="fa-brands fa-facebook fa-xl"></i>
        </li>
        <li className="mx-3">
          <i className="fa-brands fa-whatsapp fa-xl"></i>
        </li>
      </ul>
      <p className="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  );
};

export default Footer;
