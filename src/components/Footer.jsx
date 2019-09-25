import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <h1>Footer Section</h1>
      <p>{props.copyright}</p>
      <p>{props.service_version}</p>
    </div>
  );
};

export default Footer;
