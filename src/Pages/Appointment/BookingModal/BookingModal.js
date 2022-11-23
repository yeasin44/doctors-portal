import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name: treatmentName, slots, price } = treatment; // treatment is like appointmentOption

  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price,
    };
    // TODO: send data to the server and once data is saved, close the modal and display toast

    fetch("https://doctors-portal-server-nine-blue.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 mt-6"
          >
            <input
              disabled
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              Value={date}
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              disabled
              name="name"
              defaultValue={user?.displayName}
              type="text"
              placeholder="name"
              className="input w-full input-bordered"
            />
            <input
              disabled
              name="email"
              type="email"
              placeholder="email"
              className="input w-full input-bordered"
              defaultValue={user?.email}
            />
            <input
              name="phone"
              type="text"
              placeholder="phone"
              className="input w-full input-bordered"
            />
            <input
              type="submit"
              className="w-full btn btn-accent input-bordered"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
