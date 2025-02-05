import LogoFull from "../images/logo-full.svg";
import HeroGroup from "../images/hero-group.png";
import HeroWorkshop from "../images/hero-workshop.png";

const Hero = () => {
  return (
    <div className="bg-beige">
      <header className="bg-navy text-beige max-w-8xl-custom rounded-3xl md:px-20 px-8 md:py-10 py-8 md:mx-12 mx-6 min1800:mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left container */}
          <div className="w-1/2 flex flex-col gap-8 max1024:w-full">
            <div>
              <h1 className="md:text-5xl max1024:text-xl max1420:text-4xl font-serif leading-tight mb-4 max-w-[1100px]">
                We help internationals in Denmark close the gap to securing jobs
                by building skills, networks, and opportunities.
              </h1>
              <p className="mb-8 text-muted font-light max-w-[500px]">
                Sign up to our newsletter to get the latest news and updates on
                the jobfront in Denmark.
              </p>
              <button
                data-formkit-toggle="52edec1575"
                className="bg-primary text-beige pl-6 pr-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600 transition uppercase font-sans"
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
            <div className="flex justify-start gap-12 mt-6">
              <div>
                <h3 className="text-5xl max1024:text-2xl">38,2%</h3>
                <p className="text-muted max-w-[200px] max1024:text-xs">
                  of internationals are unemployed
                </p>
              </div>
              <div>
                <h3 className="text-5xl max1024:text-2xl">2,9%</h3>
                <p className="text-muted max-w-[150px] max1024:text-xs">
                  of Danes are unemployed
                </p>
              </div>
            </div>
          </div>
          {/* Right container */}
          <div className="relative w-1/4 flex justify-end">
            <img
              src={HeroGroup}
              alt="Group discussion"
              className="rounded-2xl max1024:hidden"
            />
            <img
              src={HeroWorkshop}
              alt="Workshop"
              className="absolute right-32 bottom-6 w-140 rounded-2xl max1200:hidden"
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
    </div>
  );
};

export default Hero;
