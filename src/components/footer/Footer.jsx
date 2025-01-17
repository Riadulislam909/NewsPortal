import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Daily<span>News</span>
          </h3>

          <p className="footer-links">
            <a href="#">Blog</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Daily News © 2024</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Road no: 4</span> Kajerdewri, Chittagong, Bangladesh
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+88015213546</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
