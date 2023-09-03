import React from "react";

// Define the WrongLetters component as a functional component
const WrongLetters = ({ wrongLetters }) => {
  return (
    // Start rendering the component's JSX
    <div className="wrong-letters-container">
      <div>
        {/* Check if there are wrong letters (non-empty array) */}
        {wrongLetters.length > 0 ? (<h2>Wrong</h2>) : null}


        {/* Map through wrongLetters array and render each letter in a span */}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          // Use reduce to join the letters with commas if there are multiple wrong letters
          .reduce((prev, curr) => (prev === null ? [curr] : [prev, ",", curr]), null)}
      </div>
    </div>
  );
};

// Export the WrongLetters component as the default export
export default WrongLetters;
