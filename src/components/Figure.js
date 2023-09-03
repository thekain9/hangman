import React from 'react'

const Figure = ({wrongLetters}) => {
    const errors = wrongLetters.length;
    // Calculate the number of errors (length of wrongLetters array)
  return (
    <div>
    <svg width="200" height="200" className="figure-container">
        {/* Pole */}
        {errors > 0 && <line x1="50" y1="150" x2="150" y2="150" />}
        {errors > 1 && <line x1="100" y1="150" x2="100" y2="30" />}
        {errors > 2 && <line x1="100" y1="30" x2="140" y2="30" />}

        {/* Head */}
        {errors > 3 && <circle cx="140" cy="50" r="20" fill="none" />}

        {/* Body */}
        {errors > 4 && <line x1="140" y1="70" x2="140" y2="110" />}

        {/* Arms */}
        {errors > 5 && <line x1="140" y1="75" x2="120" y2="90" />}
        {errors > 6 && <line x1="140" y1="75" x2="160" y2="90" />}

        {/* Legs */}
        {errors > 7 && <line x1="140" y1="110" x2="120" y2="130" />}
        {errors > 8 && <line x1="140" y1="110" x2="160" y2="130" />}
    </svg>

    </div>
  )
}

export default Figure
