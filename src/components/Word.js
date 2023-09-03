import React from 'react';

function Word({ selectedWord, correctLetters }) {
    return (
        <div className='word'>
            {/* Split the selected word into individual letters and map over them */}
            {selectedWord.split('').map((letter, i) => {
                return (
                    // Render each letter as a span with a unique key
                    <span className='letter' key={i}>
                        {/* Display the letter if it's in the correctLetters array, otherwise display an empty string */}
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
                );
            })}
        </div>
    );
}

export default Word;

