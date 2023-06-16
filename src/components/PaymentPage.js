import React, { useState } from 'react'

const PaymentPage = () => {
  const [accountNumber, setAccountNumber] = useState('')
  const [cvv, setCVV] = useState('')
  const [expiryDate, setExpiryDate] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    if (name === 'accountNumber') {
      setAccountNumber(value)
    } else if (name === 'cvv') {
      setCVV(value)
    } else if (name === 'expiryDate') {
      setExpiryDate(value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Perform payment processing or validation here
    // You can also navigate to a confirmation page
  }

  return (
    <div className='payment-page form-details form-container'>
      <h1>Payment Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='accountNumber'>Account Number</label>
        <input
          type='text'
          id='accountNumber'
          name='accountNumber'
          value={accountNumber}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <label htmlFor='cvv'>CVV</label>
        <input
          type='text'
          id='cvv'
          name='cvv'
          value={cvv}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <label htmlFor='expiryDate'>Expiry Date</label>
        <input
          type='text'
          id='expiryDate'
          name='expiryDate'
          value={expiryDate}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <button type='submit'>Submit Payment</button>
      </form>
    </div>
  )
}

export default PaymentPage
