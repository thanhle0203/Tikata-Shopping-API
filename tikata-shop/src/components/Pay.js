import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useHistory } from 'react-router';

const KEY = "pk_live_CL6YxM22sLtwJtpi6Fc5sqvF";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 2399,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();

  }, [stripeToken, history]);

  return (
    <div
        style = {{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? 
        (<span>Processing. Please wait ... </span>
        ) : (
            <StripeCheckout 
                name='Tikata Shop' 
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Info_icon_002.svg/1200px-Info_icon_002.svg.png'
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
        )}
      
    </div>
  )
}

export default Pay