import React from "react";

function Footer() {
  return (
    <footer className="absolute bottom-0 w-full p-4 bg-gray-800">
      <div className="container mx-auto text-center text-white">
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
