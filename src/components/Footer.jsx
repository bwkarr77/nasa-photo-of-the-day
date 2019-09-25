import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <p>{props.copyright}</p>
      <p>Version: {props.service_version}</p>
    </div>
  );
};

export default Footer;
