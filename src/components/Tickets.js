import React from 'react'
import { Link } from 'react-router-dom'
// import PaymentPage from './PaymentPage'

import shabana from '../assets/images/fixtures/shabanafc.png'
import darajanigogo from '../assets/images/fixtures/darajanigogo.png'
import gusiifc from '../assets/images/fixtures/gusiifc.png'
import migoriyouthfc from '../assets/images/fixtures/migoriyouth.png'

function Tickets() {
  return (
    <>
      <div className='football-fixture'>
        <div className='club-logos'>
          <img src={shabana} alt='Shabana Logo' />
          <img src={darajanigogo} alt='Darajani Gogo Logo' />
        </div>
        <div className='match-details'>
          <h2>Shabana vs Darajani Gogo</h2>
          <p>Date: June 30, 2023</p>
          <p>Time: 8:00 PM</p>
          <p>Venue: Gusii Stadium</p>
        </div>
        <div className='buy-ticket'>
          <Link to='/payment'>
            <button>Buy Ticket</button>
          </Link>
        </div>
      </div>

      <div className='football-fixture'>
        <div className='club-logos'>
          <img src={gusiifc} alt='Gusiifc Logo' />
          <img src={shabana} alt='Shabana Logo' />
        </div>
        <div className='match-details'>
          <h2>Gusii Fc VS Shabana</h2>
          <p>Date: July 5, 2023</p>
          <p>Time: 8:00 PM</p>
          <p>Venue: Gusii Stadium</p>
        </div>
        <div className='buy-ticket'>
          <Link to='/payment'>
            <button>Buy Ticket</button>
          </Link>
        </div>
      </div>

      <div className='football-fixture'>
        <div className='club-logos'>
          <img src={shabana} alt='Shabana Logo' />
          <img src={migoriyouthfc} alt='Migorifc Logo' />
        </div>
        <div className='match-details'>
          <h2>Migori Youth vs Shabana</h2>
          <p>Date: July 11, 2023</p>
          <p>Time: 8:00 PM</p>
          <p>Venue: Migori Stadium</p>
        </div>
        <div className='buy-ticket'>
          <Link to='/payment'>
            <button>Buy Ticket</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Tickets
