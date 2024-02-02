import React, { useState, useEffect } from 'react';

const AutoLogoutComponent = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    let timeoutId;

    const resetTimeout = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setLoggedIn(false);
      }, 5 * 60 * 1000); // 5 minutes in milliseconds
    };

    const handleActivity = () => {
      resetTimeout();
    };

    // Set up initial timeout and event listeners
    resetTimeout();
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    // Clean up event listeners on component unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, []);

  const handleLogout = () => {
    // Perform logout actions (e.g., clear session, redirect to login page)
    // ...

    // For demonstration purposes, just log a message
    console.log('User logged out due to inactivity');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Auto Logout Feature</h2>
          <p>User is logged in.</p>
        </div>
      ) : (
        <div>
          <p>Your session has expired due to inactivity.</p>
          <button onClick={handleLogout}>Log In Again</button>
        </div>
      )}
    </div>
  );
};

export default AutoLogoutComponent;
