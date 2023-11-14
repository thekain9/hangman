import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const PopUp = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    // Initialize variables for the final message and reveal word
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    // Check if the player has won or lost
    if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
        finalMessage = "Congratulations! You won!";
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
        finalMessage = "Unfortunately you lost...";
        finalMessageRevealWord = `...the word was: ${selectedWord}`;
        playable = false;
    }

    // Use the useEffect hook to update the playability state
    useEffect(() => setPlayable(playable));

    return (
        /*Conditionally render the popup container based on the finalMessage.
        "If the finalMessage variable is not empty (i.e., there is a message to display), then set the display 
        style property of the <div> element with the class 'popup-container' to 'flex' so that it is displayed 
        as a flex container. Otherwise, if the finalMessage is empty, leave the style of the <div> element empty 
        or unchanged, effectively hiding it." */
        <div className="popup-container" style={finalMessage !== "" ? { display: "flex" } : {}}>
    
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>Play Again!</button>
            </div>
        </div>
    )
}

export default PopUp;
