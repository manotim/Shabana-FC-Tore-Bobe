import React from 'react'

function Fixtures() {
  return (
    <div>
      <h1>Fixtures and Results</h1>

      <div className='result'>
        <div className='game'>
          <div className='team-details'>
            <div className='home-team'>
              <span className='team-name'>Home Team Name</span>
              <img
                src='home-team-logo.png'
                alt='Home Team Logo'
                className='team-logo'
              />
            </div>
            <div className='score'>
              <span className='home-score'>3</span>
              <span className='hyphen'>-</span>
              <span className='away-score'>1</span>
            </div>
            <div className='away-team'>
              <img
                src='away-team-logo.png'
                alt='Away Team Logo'
                className='team-logo'
              />
              <span className='team-name'>Away Team Name</span>
            </div>
          </div>
          <div className='game-details'>
            <button className='details-button'>Game Details</button>
          </div>
        </div>
      </div>

      <div className='result'>
        <div className='game'>
          <div className='team-details'>
            <div className='home-team'>
              <span className='team-name'>Home Team Name</span>
              <img
                src='home-team-logo.png'
                alt='Home Team Logo'
                className='team-logo'
              />
            </div>
            <div className='score'>
              <span className='home-score'>3</span>
              <span className='hyphen'>-</span>
              <span className='away-score'>1</span>
            </div>
            <div className='away-team'>
              <img
                src='away-team-logo.png'
                alt='Away Team Logo'
                className='team-logo'
              />
              <span className='team-name'>Away Team Name</span>
            </div>
          </div>
          <div className='game-details'>
            <button className='details-button'>Game Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fixtures
