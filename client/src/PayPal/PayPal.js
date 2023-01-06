import React, {useContext} from 'react'
import { LoginContext } from '../context/ContextProvider';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function PayPal({totalAmt}) {
const { account } = useContext(LoginContext);
  return (
    <div >
         <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: totalAmt+40,
                                },
                            },
                        ],
                    });
                }}
                onApprove={async (data, actions) => {
                   await actions.order.capture();
                   alert( `Payment Completed Successfully by ${ account }` );
                }}
            />
        </PayPalScriptProvider>
      </div>
  )
}

export default PayPal