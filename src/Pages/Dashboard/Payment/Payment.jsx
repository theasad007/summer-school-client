import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_PK}`)

const Payment = () => {
    return (
        <div>
            <div className="title mb-5">
                <h3 className="text-2xl font-bold">Payment</h3>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;