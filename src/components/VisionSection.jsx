import Arrow from "../images/arrow.svg";
import Internationals from "../images/internationals.png";

const VisionSection = () => {
  return (
    <div id="vision" className="bg-beige md:py-24 py-12 px-8">
      {/* Top Section with text and arrow */}
      <div className="flex justify-between items-end mb-12 min1800:max-w-7xl-custom 2xl:max-w-7xl mx-auto max1540:max-w-5xl max13700:max-w-4xl">
        <p className="text-muted text-xl leading-relaxed max-w-2xl">
          As internationals, we often face challenges like cultural differences,
          limited networks, and navigating the unspoken rules of Danish
          society—like how to present ourselves and craft the perfect resume.
        </p>
        <img
          src={Arrow}
          alt="non profit organization - internationals in Denmark"
          className="w-10 h-10 md:block hidden"
        />
      </div>

      {/* Vision Section */}
      <div className="pt-8 max-w-3xl max1200:max-w-xl ml-auto">
        <span className="inline-block bg-lightMuted text-sm text-muted py-1 px-3 rounded-full uppercase tracking-wide mb-4">
          Our Vision
        </span>
        <h2 className="text-navy text-4xl font-serif leading-tight max-w-xl max1200:text-3xl max1024:text-xl">
          Our vision is to level the playing field by providing practical tools,
          a supportive community, and creating direct connections with potential
          employers to help internationals succeed in the Danish job market.
        </h2>
      </div>

      <div className="flex max-w-8xl-custom md:mt-24 mt-6 md:mx-12 mx-0 justify-between items-start min1800:mx-auto max1024:flex-col">
        <img src={Internationals} alt="Vision" className="rounded-3xl w-full" />
      </div>
    </div>
  );
};

export default VisionSection;
