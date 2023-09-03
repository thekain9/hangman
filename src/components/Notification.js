import React from 'react';

// Define the Notification component as a functional component
const Notification = ({ showNotification }) => {
  return (
    // Start rendering the component's JSX
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      {/* Display a message when showNotification is true
      className={notification-container ${showNotification ? 'show' : ''}}: In the className attribute, 
      a template literal is used to create a dynamic CSS class name for the <div> element. This dynamic 
      class name is based on the value of showNotification. "notification-container" is a static CSS class 
      name applied to the <div> element. ${showNotification ? 'show' : ''} is a conditional expression that 
      dynamically adds the class name 'show' to the element if showNotification is true. If showNotification 
      is false, it doesn't add the 'show' class. */}

      <p>You have already entered this letter!</p>
    </div>
  );
};

// Export the Notification component as the default export
export default Notification;

