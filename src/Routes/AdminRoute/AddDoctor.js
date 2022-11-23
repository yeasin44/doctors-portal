import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Pages/Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const imgHostKey = process.env.REACT_APP_imgbb_key;
  //   console.log(imgHostKey);
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-nine-blue.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleAddDoctor = (data) => {
    // console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          //   doctor er information server a send korar jonno

          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          fetch(`https://doctors-portal-server-nine-blue.vercel.app/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} has been added`);
              navigate("/dashboard/manageDoctors");
            });
        }
      });
  };
  return (
    <div className="">
      <h2 className="text-2xl font-bold py-4">Add a doctor</h2>
      <div className="w-96 p-6 border-2 rounded-2xl border-slate-900 ">
        <h2 className="font-bold text-center text-xl py-6">Sign Up</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email address is required" })}
              type="email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600 mt-2">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
            <select
              {...register("specialty")}
              className="select select-bordered w-full"
            >
              {specialties?.map((special) => (
                <option key={special._id} value={special.name}>
                  {special.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              {...register("image", { required: "Photo address is required" })}
              type="file"
              className="input input-bordered w-full"
            />
            {errors.img && (
              <p className="text-red-600 mt-2">{errors.img?.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full mt-4"
            value="Add Doctor"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
