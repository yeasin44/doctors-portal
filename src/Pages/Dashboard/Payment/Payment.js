import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const navigation = useNavigation();
  const booking = useLoaderData();

  const { treatment, price, appointmentDate, slot } = booking;

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl">Payment for {treatment}</h2>
      <h2>
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </h2>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
