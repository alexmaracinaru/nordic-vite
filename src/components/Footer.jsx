import LogoFull from "../images/logo-full.svg";
import FooterGroup from "../images/footer-group.png";

const Footer = () => {
  return (
    <div className="bg-beige">
      <header className="bg-lightMuted text-navy md:max-w-8xl-custom rounded-3xl md:px-20 px-6 md:py-16 py-6 md:mx-12 mx-6 md:my-12 my-6 min1800:mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left container */}
          <div className="w-1/2 flex flex-col gap-8">
            <div>
              <h1 className="md:text-5xl text-2xl font-serif leading-tight mb-4 md:max-w-[500px]">
                Denmark needs internationals
              </h1>
              <p className="mb-8 text-muted font-light max-w-[500px]">
                The Danish jobmarket is constantly changing. Stay in the loop to
                find out the latest news and updates.
              </p>
              <button
                data-formkit-toggle="52edec1575"
                className="bg-primary text-beige pl-6 pr-4 py-2 rounded-lg flex items-center md:space-x-2 hover:bg-red-600 transition uppercase font-sans mb-4 md:mb-0"
              >
                <span>Sign up</span>
                <div className="flex items-center justify-center w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15l6-6m0 0l-6 0m6 0l0 6"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          {/* Right container */}
          <div className="relative max-w-[650px] flex justify-end">
            <img
              src={FooterGroup}
              alt="Group discussion"
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Full logo */}
        <div className="mt-4">
          <img
            src={LogoFull}
            alt="Nordic Compass Full Logo"
            className="w-full"
          />
        </div>
      </header>

      {/* Footer Section */}
      <footer className="text-navy py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Address and CVR */}
          <div className="text-sm">
            <p>Howitzvej 30</p>
            <p>2000 Frederiksberg</p>
            <p>CVR: 45289672</p>
            <a
              href="mailto:hello@nordic-compass.org"
              className="text-primary hover:underline"
            >
              hello@nordic-compass.org
            </a>
          </div>
          {/* Social Media Links */}
          <div className="flex gap-12">
            <a
              href="https://www.linkedin.com/company/nordic-compass"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/nordic-compass"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/nordic-compass"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Facebook
            </a>
          </div>
          <a
            href="https://buymeacoffee.com/nordic.compass"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary font-bold"
          >
            Support us
          </a>
          {/* Copyright */}
          <div className="text-sm text-center md:text-left mb-20 md:mb-0">
            <p>&copy; 2025 Nordic Compass</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
