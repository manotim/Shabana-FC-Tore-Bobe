import React from 'react';
import { Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import shabana from '../assets/images/fixtures/shabanafc.png';
// import darajanigogo from '../assets/images/fixtures/darajanigogo.png';

const FixtureWrapper = styled('div')({
  padding: '1rem',
  '& .result': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  '& .game': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  '& .team-details': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .team-name': {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginLeft: '0.5rem',
  },
  '& .team-logo': {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    marginRight: '0.5rem',
  },
  '& .score': {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
  '& .home-score': {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginRight: '0.2rem',
  },
  '& .hyphen': {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginRight: '0.2rem',
  },
  '& .away-score': {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginLeft: '0.2rem',
  },
  '& .game-details': {},
  '& .details-button': {
    backgroundColor: '#d00027',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
});

function Fixtures() {
  return (
    <FixtureWrapper>
      <Typography variant="h1">Fixtures and Results</Typography>

      <div className="result">
        <div className="game">
          <div className="team-details">
            <div className="home-team">
              <span className="team-name">SHABANA FC</span>
              <img src={shabana} alt="Home Team Logo" className="team-logo" />
            </div>
            <div className="score">
              <span className="home-score">3</span>
              <span className="hyphen">-</span>
              <span className="away-score">1</span>
            </div>
            <div className="away-team">
              <img
                src='https://res.cloudinary.com/dqoxcq0v8/image/upload/v1690661457/shabana/zqjrza5ng0fzaf1fgdco.png'
                alt="Away Team Logo"
                className="team-logo"
              />
              <span className="team-name">DARAJANI GOGO</span>
            </div>
          </div>
          <div className="game-details">
            <Button className="details-button">Game Details</Button>
          </div>
        </div>
      </div>

      <div className="result">
        <div className="game">
          <div className="team-details">
            <div className="home-team">
              <span className="team-name">Home Team Name</span>
              <img
                src="home-team-logo.png"
                alt="Home Team Logo"
                className="team-logo"
              />
            </div>
            <div className="score">
              <span className="home-score">3</span>
              <span className="hyphen">-</span>
              <span className="away-score">1</span>
            </div>
            <div className="away-team">
              <img
                src="away-team-logo.png"
                alt="Away Team Logo"
                className="team-logo"
              />
              <span className="team-name">Away Team Name</span>
            </div>
          </div>
          <div className="game-details">
            <Button className="details-button">Game Details</Button>
          </div>
        </div>
      </div>
    </FixtureWrapper>
  );
}

export default Fixtures;
