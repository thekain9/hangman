import React from "react";

const VirtualKeyboard = ({ playable, correctLetters, wrongLetters, onKeyPress }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const handleClick = (letter) => {
    if (playable && !correctLetters.includes(letter) && !wrongLetters.includes(letter)) {
      onKeyPress(letter);
    }
  };

  return (
    <div className="virtual-keyboard">
      {alphabet.split("").map((letter, index) => (
        <button
          key={index}
          onClick={() => handleClick(letter)}
          disabled={!playable || correctLetters.includes(letter) || wrongLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default VirtualKeyboard;
