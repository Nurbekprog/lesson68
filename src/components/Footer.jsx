import React from "react";

const Footer = () => {
  return (
    <div className="position-fixed w-100 bottom-0 bg-success py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="text-white">Links</h1>
        <ul className="text-white d-flex gap-5">
          <li className="text-3xl text-bg-secondary border border-black px-4 link-opacity-25-hover">
            Home
          </li>
          <li className="text-3xl text-bg-secondary border border-black px-4 link-opacity-25-hover">
            About
          </li>
          <li className="text-3xl text-bg-secondary border border-black px-4 link-opacity-25-hover">
            Contact
          </li>
          <li className="text-3xl text-bg-secondary border border-black px-4 link-opacity-25-hover">
            Service
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
