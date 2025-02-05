import React from "react";
import alex from "../images/alex.png";
import rox from "../images/rox.png";
import underline from "../images/underline.svg";

const AboutUs = () => {
  const team = [
    {
      name: "Roxana Lostun",
      title: "Partner - Employability Officer",
      image: rox,
      number: "01",
      description:
        "Roxana is passionate about guiding individuals to build careers that align with their potential. She focuses on developing impactful programs that foster growth, inclusion, and meaningful opportunities through her expertise in talent management and NGO development.",
    },
    {
      name: "Alexandra Maracinaru",
      title: "Partner - Head of Creative",
      image: alex,
      number: "02",
      description: (
        <>
          Alexandra is an entrepreneur driving{" "}
          <a
            href="https://brandiaq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline hover:text-primary transition-colors duration-300"
          >
            Brandiaq
          </a>
          , a creative growth studio dedicated to building brands, products, and
          digital experiences. She also serves as the CEO of{" "}
          <a
            href="https://startups.brandiaq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline hover:text-primary transition-colors duration-300"
          >
            B by Brandiaq
          </a>
          , a venture design studio dedicated to helping startups achieve high
          growth, secure funding, and scale effectively.
        </>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-navy md:max-w-8xl-custom max-w-full rounded-3xl md:mx-24 mx-6 min1800:mx-auto md:p-24 p-6 mt-12"
    >
      <div className="relative inline-block mb-6 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-beige relative z-10">
          Who We Are
        </h2>
        <img
          src={underline}
          alt=""
          className="absolute -bottom-2 left-0 w-[100px] sm:w-[150px] md:w-[200px] z-0"
          aria-hidden="true"
        />
      </div>
      <p className="text-left text-muted text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12 max-w-[600px]">
        We are two internationals who understand the unique challenges and
        complexities of building a career in Denmark. We created Nordic Compass
        to turn these barriers into stepping stones.
      </p>

      <div className="flex flex-col md:flex-row justify-start items-start gap-8 md:gap-12">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-start max-w-full md:max-w-[500px]"
          >
            <img
              src={member.image}
              alt={`${member.name} - ${member.title}`}
              className="rounded-3xl object-cover w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div className="mt-4 sm:mt-6">
              <h3 className="text-lg sm:text-xl text-beige font-serif">
                {member.name}
              </h3>
              <p className="text-sm sm:text-md text-muted font-sans">
                {member.title}
              </p>
            </div>
            <div className="flex items-center space-x-2 my-2">
              <span className="text-sm text-beige font-sans">
                {member.number}
              </span>
              <div className="h-[2px] w-16 bg-beige"></div>
            </div>
            <p className="text-sm sm:text-base text-muted">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      <a
        href="https://thehub.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed md:absolute bottom-6 right-6 md:bottom-16 md:right-16 bg-primary text-beige px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600 transition-colors duration-300 uppercase font-sans"
      >
        <span>Join Us</span>
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
      </a>
    </section>
  );
};

export default AboutUs;
