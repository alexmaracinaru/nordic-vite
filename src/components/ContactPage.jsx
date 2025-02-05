import React from "react";
import underline from "../images/underline.svg";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <div>
      <div id="contact" className="max-w-7xl rounded-3xl mx-auto p-16">
        {/* Section Header */}
        <div className="relative inline-block mb-12">
          <h2 className="text-4xl text-navy relative z-10">Get in Touch</h2>
          <img
            src={underline}
            alt="Underline"
            className="absolute -bottom-2 left-0 w-[150px] md:w-[200px] z-0"
          />
        </div>
        <p className="text-muted sm:text-base md:text-lg leading-relaxed max-w-[700px] mb-12">
          Whether you want to partner with us, share ideas, or simply get in
          touch, we'd love to hear from you. Fill out the form below, and we'll
          get back to you shortly.
        </p>

        {/* Form */}
        <form
          action="https://usebasin.com/f/9b6fe411a931"
          method="POST"
          className="space-y-6"
        >
          {/* Form fields */}
          {/* ... existing form fields ... */}
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
