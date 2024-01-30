// HomePage.js
import React from 'react';

const eventsData = [
    { date: 'JUL 16', location: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE', buttonText: 'BUY TICKETS' },
    { date: 'JUL 19', location: 'TORONTO, ON', venue: 'BUDWEISER STAGE', buttonText: 'BUY TICKETS' },
    { date: 'JUL 22', location: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE', buttonText: 'BUY TICKETS' },
    { date: 'JUL 29', location: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION', buttonText: 'BUY TICKETS' },
    { date: 'AUG 2', location: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA', buttonText: 'BUY TICKETS' },
    { date: 'AUG 7', location: 'CONCORD, CA', venue: 'CONCORD PAVILION', buttonText: 'BUY TICKETS' },
  ];
  
  const HomePage = () => {
    return (
      <div>
        <h1>Welcome to the Event Page!</h1>
        <ul>
          {eventsData.map((event, index) => (
            <li key={index}>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <p>{event.venue}</p>
              <button>{event.buttonText}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
export default HomePage;
