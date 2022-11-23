import React from "react";
import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/whitening.png";
import treatment from "../../../assets/images/treatment.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: img1,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: img2,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: img3,
    },
  ];
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-primary font-bold text-xl">Our Services</h2>
        <h1 className="text-3xl ">Services We Provide</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-6 p-6">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className="card lg:card-side bg-base-100 p-28">
        <figure>
          <img className="" src={treatment} alt="Album" />
        </figure>
        <div className="card-body mt-40">
          <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
          <p className="">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. <br />{" "}
            The point of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, <br />{" "}
            content here', making it look like readable English. Many desktop
            publishing packages and web page
          </p>
          <div className="absolute bottom-60">
            <button className="btn btn-primary">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
