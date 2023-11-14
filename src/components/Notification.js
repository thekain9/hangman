import React from 'react';

// Define the Notification component as a functional component
const Notification = ({ showNotification }) => {
  return (
    // Start rendering the component's JSX
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>

      <p>You have already entered this letter!</p>
    </div>
  );
};

// Export the Notification component as the default export
export default Notification;

