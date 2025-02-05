import Arrow from "../images/arrow.svg";
import underline from "../images/underline.svg";

const ProgramsSection = () => {
  return (
    <div
      id="programs"
      className="max-w-8xl-custom md:mx-24 mx-12 min1800:mx-auto pt-8 md:pb-24"
    >
      <div className="relative inline-block mb-12">
        <h2 className="text-4xl text-navy relative z-10">Our Programs</h2>
        <img
          src={underline}
          alt="Red underline"
          className="absolute -bottom-2 left-0 w-[150px] md:w-[250px] z-0"
        />
      </div>
      <p className="font-openSans text-left text-muted sm:text-base md:text-lg leading-relaxed mb-12 max-w-[600px]">
        The Danish job market is unique, and it can be challenging to navigate.
        We did extensive needs research, and asked you to share your challenges
        with us, and the results of the survey are the basis for our programs.
      </p>
      <div>
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {/* Card 1 */}
          <div className="relative md:px-24 md:py-24 px-12 py-12 bg-lightMuted rounded-3xl transition-all duration-300 text-navy md:max-w-[500px] group">
            <p className="text-xl leading-relaxed max-w-xl text-muted">01</p>
            <h3 className="md:text-2xl text-xl">Mentorship Academy</h3>
            <p className="mt-4 text-muted md:text-md text-sm">
              Connect with experienced mentors who can guide you through the
              nuances of the Danish job market and help you achieve your career
              goals.
            </p>
            <img
              src={Arrow}
              alt="Arrow pointing to the right"
              className="absolute bottom-12 right-12 md:w-6 md:h-6 w-4 h-4"
            />
            {/* Tooltip */}
            <div className="absolute bottom-4 right-4 hidden group-hover:flex bg-navy text-beige text-xs rounded px-3 py-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              Coming Soon!
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative md:px-24 md:py-24 px-12 py-12 bg-lightMuted rounded-3xl transition-all duration-300 text-navy md:max-w-[500px] group">
            <p className="text-xl leading-relaxed max-w-xl text-muted">02</p>
            <h3 className="md:text-2xl text-xl">Networking Events</h3>
            <p className="mt-4 text-muted md:text-md text-sm">
              Meet professionals, potential employers, and peers to expand your
              network and uncover the right opportunities.
            </p>
            <img
              src={Arrow}
              alt="Arrow pointing to the right"
              className="absolute bottom-12 right-12 md:w-6 md:h-6 w-4 h-4"
            />
            {/* Tooltip */}
            <div className="absolute bottom-4 right-4 hidden group-hover:flex bg-navy text-beige text-xs rounded px-3 py-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              Coming Soon!
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative md:px-24 md:py-24 px-12 py-12 bg-lightMuted rounded-3xl transition-all duration-300 text-navy md:max-w-[500px] group">
            <p className="text-xl leading-relaxed max-w-xl text-muted">03</p>
            <h3 className="md:text-2xl text-xl">Workshops & Resources</h3>
            <p className="mt-4 text-muted md:text-md text-sm">
              Participate in workshops that teach you how to craft Danish-style
              resumes, ace interviews, and understand workplace culture - in a
              fashion that is in no way time-wasting.
            </p>
            <img
              src={Arrow}
              alt="Arrow pointing to the right"
              className="absolute bottom-12 right-12 md:w-6 md:h-6 w-4 h-4"
            />
            {/* Tooltip */}
            <div className="absolute bottom-4 right-4 hidden group-hover:flex bg-navy text-beige text-xs rounded px-3 py-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              Coming Soon!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
