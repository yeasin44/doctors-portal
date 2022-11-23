import React from "react";
import image from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import bg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="min-h-screen"
    >
      <div className="hero relative top-40">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
