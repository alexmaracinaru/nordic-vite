import React from "react";
import station from "../images/station.svg";
import sustainary from "../images/sustainary.svg";
import brandiaq from "../images/brandiaq.svg";
import namandla from "../images/namandla.svg";
import itu from "../images/itu.svg";
import venturecup from "../images/venturecup.svg";
import underline from "../images/underline.svg";

const partners = [
  {
    name: "Station",
    logo: station,
    url: "https://station.dk",
  },
  {
    name: "Sustainary",
    logo: sustainary,
    url: "https://sustainary.org",
  },
  {
    name: "Brandiaq",
    logo: brandiaq,
    url: "https://brandiaq.com",
  },
  {
    name: "Namandla",
    logo: namandla,
    url: "https://startups.brandiaq.com",
  },
  {
    name: "IT University of Copenhagen",
    logo: itu,
    url: "https://itu.dk",
  },
  {
    name: "Venture Cup",
    logo: venturecup,
    url: "https://venturecup.dk",
  },
];

const PartnersSection = () => {
  return (
    <section className="max-w-8xl-custom mx-auto md:px-24 px-6 pb-24">
      <div className="relative inline-block mb-12">
        {/*  <h2 className="text-2xl sm:text-3xl md:text-4xl text-navy relative z-10">
          Our Partners
        </h2> */}
        <img
          src={underline}
          alt=""
          className="absolute -bottom-2 left-0 w-[100px] sm:w-[150px] md:w-[200px] z-0"
          aria-hidden="true"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[150px] hover:opacity-75 transition-opacity duration-300"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
