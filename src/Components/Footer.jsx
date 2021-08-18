import React from "react";
// decided against using a footer but made the component incase 
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      made by Robbie Koech as part of the Postlight application Copyright ⓒ {year}
    </footer>
  );
}

export default Footer;
