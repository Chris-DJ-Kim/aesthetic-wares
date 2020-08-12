import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

//Stipe wants price integer values in cents
const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    "pk_test_51H8Z92Ieo56LWSMmwIzt79Maf9bpxuqR45oRE0sH1mXLh6OLsaC8Y4iDdUXTXWSFvwMr6abo6TL2IcJYmaaw4Di400LmoE0Lws";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceInCents,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Aesthetic Wares"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/gRxDp10/iron-bowl.jpg"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
