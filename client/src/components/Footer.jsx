import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5 4 position-fixed bottom-0 start-0 end-0">
      <div className="container text-center ">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} CarHub. All Rights Reserved.
        </p>
        <div className="social-icons mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
