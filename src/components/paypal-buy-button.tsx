import React, { useState, useEffect } from 'react';
import Toast from '../components/toast';

const CLIENT_ID =
  'AcqfMNXpDrPMG76PbzADaYMrS5HZaVnqMQ79WnEcy82-5IlGQWK3oWgzs5uHmr9_1dw8q0uX-6keP9pm';
const CURRENCY = 'GBP';

declare global {
  interface Window {
    paypal: any;
    Sentry: any;
  }
}

const PaypalBuyButton = () => {
  const [isSdkReady, setIsSdkReady] = useState(false);
  const [isButtonMounted, setIsButtonMounted] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [buyer, setBuyer] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    const src = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=${CURRENCY}`;
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.onload = () => setIsSdkReady(true);
    script.onerror = () => {
      window.Sentry.captureException(
        new Error(`Failed to load PayPal SDK from ${src}`)
      );
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (isSdkReady && !isButtonMounted) {
      window.paypal
        .Buttons({
          style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal'
          },
          fundingSource: window.paypal.FUNDING.PAYPAL,
          createOrder: function(_: any, actions: any) {
            return actions.order.create({
              // eslint-disable-next-line @typescript-eslint/camelcase
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
              window.Sentry.captureMessage(
                `New purchase recorded at ${new Date().toISOString()}`,
                'info'
              );
            });
          },
          onError: (error: Error) => {
            setStatus('error');
            window.Sentry.captureException(error);
          }
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
