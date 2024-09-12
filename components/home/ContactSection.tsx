import React from "react";
import Button from "../Button";

const ContactSection = () => {
  return (
    <section id="contace" className="pt-[120px]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="text-black-500 font-semibold text-[65px] pb-[15px] text-center">
          Contact Me
        </div>
        <div className="text-black-500 text-[21px] pb-[48px] text-center">
          <div>Ready to bring your ideas to life?</div>
          <div>Let's collaborate and create something amazing together.</div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 sm:justify-center sm:max-w-[874px] w-full mx-auto">
          <form action="post" className="sm:col-span-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 bg-black-50"
            />
          </form>
          <Button>Contact Me</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
