import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";

export const ButtonWrapper = ({ amount, showSpinner, reserve }) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const currency = "USD";
  const style = { layout: "vertical" };

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: "USD",
      },
    });
    console.log(isPending);
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      {!isPending && (
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            });
          }}
          onApprove={() => {
            reserve();
            // toast.success("Reserve room success.");
          }}
          onError={() => {
            toast.error("Payment failed!");
          }}
        />
      )}
    </>
  );
};
