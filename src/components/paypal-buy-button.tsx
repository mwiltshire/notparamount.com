/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React, { useState, useEffect } from 'react';
import Toast from '../components/toast';

const CLIENT_ID =
  'AcqfMNXpDrPMG76PbzADaYMrS5HZaVnqMQ79WnEcy82-5IlGQWK3oWgzs5uHmr9_1dw8q0uX-6keP9pm';
const CURRENCY = 'GBP';

const PaypalBuyButton = () => {
  const [isSdkReady, setIsSdkReady] = useState(false);
  const [isButtonMounted, setIsButtonMounted] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [buyer, setBuyer] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    // script.src = `https://www.paypal.com/sdk/js?client_id=${CLIENT_ID}`;
    script.src = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=${CURRENCY}`;
    script.async = true;
    script.onload = () => setIsSdkReady(true);
    script.onerror = () => {
      throw new Error('Paypal SDK could not be loaded.');
    };

    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (isSdkReady && !isButtonMounted) {
      // @ts-ignore
      window.paypal
        .Buttons({
          style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal'
          },
          // @ts-ignore
          fundingSource: window.paypal.FUNDING.PAYPAL,
          createOrder: function(_: any, actions: any) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '30'
                  }
                }
              ]
            });
          },
          onApprove: function(_: any, actions: any) {
            return actions.order.capture().then(function(details: any) {
              setStatus('success');
              setBuyer(details.payer.name.given_name);
            });
          },
          onError: () => setStatus('error')
        })
        .render('#paypal-button-container');

      setIsButtonMounted(true);
    }
  }, [isSdkReady, isButtonMounted]);

  if (!isSdkReady) {
    return null;
  }

  return (
    <>
      <div id="paypal-button-container" />
      <Toast
        status={status}
        show={!!status}
        message={
          status === 'success'
            ? `Thanks ${buyer}! Your payment was completed successfully!`
            : 'Oh no! Something went wrong during checkout. Please check and try again!'
        }
        autoClose={false}
        handleClose={() => setStatus(null)}
      />
    </>
  );
};

export default PaypalBuyButton;
