import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';

const PaymentPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [accountNumber, setAccountNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const steps = ['Account Number', 'CVV', 'Expiry Date', 'Confirmation']; // Define the steps

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'accountNumber') {
      setAccountNumber(value);
    } else if (name === 'cvv') {
      setCVV(value);
    } else if (name === 'expiryDate') {
      setExpiryDate(value);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform payment processing or validation here
    // You can also navigate to a confirmation page
  };

  return (
    <div className='payment-page form-details form-container'>
      <h1>Payment Details</h1>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit}>
        {activeStep === 0 && (
          <>
            <label htmlFor='accountNumber'>Account Number</label>
            <input
              type='text'
              id='accountNumber'
              name='accountNumber'
              value={accountNumber}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        {activeStep === 1 && (
          <>
            <label htmlFor='cvv'>CVV</label>
            <input
              type='text'
              id='cvv'
              name='cvv'
              value={cvv}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        {activeStep === 2 && (
          <>
            <label htmlFor='expiryDate'>Expiry Date</label>
            <input
              type='text'
              id='expiryDate'
              name='expiryDate'
              value={expiryDate}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        {/* Add more steps here */}
        <br />
        <br />
        {activeStep > 0 && (
          <Button onClick={handleBack} variant='contained'>
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button onClick={handleNext} variant='contained'>
            Next
          </Button>
        ) : (
          <Button type='submit' variant='contained'>
            Submit Payment
          </Button>
        )}
      </form>
    </div>
  );
};

export default PaymentPage;
