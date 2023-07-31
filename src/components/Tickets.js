import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
// import shabana from '../assets/images/fixtures/shabanafc.png';
// import darajanigogo from '../assets/images/fixtures/darajanigogo.png';
// import gusiifc from '../assets/images/fixtures/gusiifc.png';
// import migoriyouthfc from '../assets/images/fixtures/migoriyouth.png';

const TicketWrapper = styled('div')({
  padding: '1rem',
  '& .football-fixture': {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    background: 'linear-gradient(to right, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0.2))',
    marginLeft: '90px',
    marginBottom: '40px',
    marginTop: '50px',
    padding: '10px',
  },
  '& .club-logos': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: '20px',
  },
  '& .club-logos img': {
    width: '70px',
    height: '70px',
  },
  '& .match-details': {
    flexGrow: 1,
  },
  '& .buy-ticket': {
    marginLeft: '20px',
  },
  '& button': {
    padding: '5px 10px',
    backgroundColor: '#2e2e2e',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
});

function Tickets() {
  return (
    <TicketWrapper>
      <Typography variant="h2">Tickets</Typography>

      <div className="football-fixture">
        <div className="club-logos">
          <img src='https://res.cloudinary.com/dqoxcq0v8/image/upload/v1690660867/shabana/inpbtzbkg2vvtqzoebtd.png' alt="Shabana Logo" />
          <img src='https://res.cloudinary.com/dqoxcq0v8/image/upload/v1690661457/shabana/zqjrza5ng0fzaf1fgdco.png' alt="Darajani Gogo Logo" />
        </div>
        <div className="match-details">
          <Typography variant="h3">Shabana vs Darajani Gogo</Typography>
          <Typography variant="body1">Date: June 30, 2023</Typography>
          <Typography variant="body1">Time: 8:00 PM</Typography>
          <Typography variant="body1">Venue: Gusii Stadium</Typography>
        </div>
        <div className="buy-ticket">
          <Link to="/payment">
            <Button variant="contained">Buy Ticket</Button>
          </Link>
        </div>
      </div>

      <div className="football-fixture">
        <div className="club-logos">
          <img src='https://res.cloudinary.com/dqoxcq0v8/image/upload/v1690661039/shabana/isxb0qbj0waeic5rne0a.png' alt="Gusiifc Logo" />
          <img src='https://res.cloudinary.com/dqoxcq0v8/image/upload/v1690660867/shabana/inpbtzbkg2vvtqzoebtd.png' alt="Shabana Logo" />
        </div>
        <div className="match-details">
          <Typography variant="h3">Gusii Fc VS Shabana</Typography>
          <Typography variant="body1">Date: July 5, 2023</Typography>
          <Typography variant="body1">Time: 8:00 PM</Typography>
          <Typography variant="body1">Venue: Gusii Stadium</Typography>
        </div>
        <div className="buy-ticket">
          <Link to="/payment">
            <Button variant="contained">Buy Ticket</Button>
          </Link>
        </div>
      </div>

      <div className="football-fixture">
        <div className="club-logos">
          <img src='https://res.cloudinary.com/dqoxcq0v8/image/upload/v1690660867/shabana/inpbtzbkg2vvtqzoebtd.png' alt="Shabana Logo" />
          <img src='https://res.cloudinary.com/dqoxcq0v8/image/upload/v1690661062/shabana/sapvgu7onflq97vjrkpe.png' alt="Migorifc Logo" />
        </div>
        <div className="match-details">
          <Typography variant="h3">Migori Youth vs Shabana</Typography>
          <Typography variant="body1">Date: July 11, 2023</Typography>
          <Typography variant="body1">Time: 8:00 PM</Typography>
          <Typography variant="body1">Venue: Migori Stadium</Typography>
        </div>
        <div className="buy-ticket">
          <Link to="/payment">
            <Button variant="contained">Buy Ticket</Button>
          </Link>
        </div>
      </div>
    </TicketWrapper>
  );
}

export default Tickets;
