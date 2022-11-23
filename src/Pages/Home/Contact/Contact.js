import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import appointment from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div style={{ background: `url(${appointment})` }}>
      <div className="text-center mt-12 p-12">
        <h2 className="text-primary font-bold">Contact Us</h2>
        <h1 className="text-3xl text-white">Stay connected with us</h1>
      </div>
      <div className="mt-4">
        <form className="flex justify-center items-center flex-col px-6">
          <input
            className=" drop-shadow-xl border p-2 rounded-lg  w-full md:w-3/4 lg:w-2/5"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <br />
          <input
            className="  drop-shadow-xl border p-2 rounded-lg  w-full md:w-3/4 lg:w-2/5"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <br />
          <textarea
            name=""
            id=""
            rows="8"
            placeholder="Your message"
            className=" drop-shadow-xl border p-2 rounded-lg mb-2 w-full md:w-3/4 lg:w-2/5"
          ></textarea>
          <div className="p-2">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
