import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_live_CL6YxM22sLtwJtpi6Fc5sqvF";

const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  }
  return (
    <div
        style = {{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout 
        name='Tikata Shop' 
        image='https://escforumwiki.com/images/archive/d/d0/20130217203312%21Flag_of_Bitland.png'
        billingAddress
        shippingAddress
        description='Your total is $1099'
        amount={2300}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style = {{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </ StripeCheckout>
    </div>
  )
}

export default Pay