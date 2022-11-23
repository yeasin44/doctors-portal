import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className=""
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero text-white">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt=""
            className="-mt-32  -mb-4  hidden lg:block md:block lg:w-1/2"
          />
          <div>
            <h4 className="text-primary font-bold text-lg">Appointment</h4>
            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
