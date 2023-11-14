import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from './components/WrongLetters'; 
import Word from './components/Word';
import { showNotification as show } from "./helpers/helpers"; // Renaming imported function
import Notification from "./components/Notification";
import PopUp from "./components/PopUp";
import ClueButton from "./components/ClueButton";
import VirtualKeyboard from "./components/virtualKeyBoard";

import './App.css';

// An array of words for the game
const words = [
  "knowledge",
  "technology",
  "communication",
  "programming",
  "community",
  "university",
  "television",
  "information",
  "celebration",
  "imagination",
  "organization",
  "environment",
  "adventure",
  "discovery",
  "opportunity",
  "chocolate",
  "entertainment",
  "celebrity",
  "experience",
  "creativity",
];

// Select a random word from the array
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // Define state variables using useState
  const [playable, setPlayable] = useState(true); // Whether the game is playable
  const [correctLetters, setCorrectLetters] = useState([]); // Correctly guessed letters
  const [wrongLetters, setWrongLetters] = useState([]); // Incorrectly guessed letters
  const [showNotification, setShowNotification] = useState(false); // Show notification flag
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // useEffect to handle keyboard events
  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) { // Check if the key pressed is a letter (A-Z)
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            // Update correctLetters array with the new letter
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // Show a notification when the correct letter is pressed again
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            // Update wrongLetters array with the new letter
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            // Show a notification when the wrong letter is pressed again
            show(setShowNotification);
          }
        }
      }
    };

    // Add event listener for keydown and remove it when the component unmounts
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);

  }, [correctLetters, wrongLetters, playable]);

  // Function to reset the game and play again
  function playAgain() {
    setPlayable(true);

    // Empty correctLetters and wrongLetters arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    // Select a new random word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      {/* Display the Header component */}
      <Header />
  
      {/* Create a container for the game components */}
      <div className="game-container">
        {/* Display the Figure component with the wrongLetters prop */}
        <Figure wrongLetters={wrongLetters} />
  
        {/* Display the WrongLetters component with the wrongLetters prop */}
        <WrongLetters wrongLetters={wrongLetters} />
  
        {/* Display the Word component with selectedWord and correctLetters props */}
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        
      </div>
  
      {/* Display the PopUp component with various props */}
      <PopUp
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
  
      {/* Display the Notification component with the showNotification prop */}
      <Notification showNotification={showNotification} />
      {/* Display the ClueButton component with the selectedWord prop */}
      
      <ClueButton word={selectedWord} />
      {isPhone && ( <VirtualKeyboard
        playable={playable}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        onKeyPress={(letter) => {
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              // Update correctLetters array with the new letter
              setCorrectLetters((currentLetters) => [...currentLetters, letter]);
            } else {
              // Show a notification when the correct letter is pressed again
              show(setShowNotification);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              // Update wrongLetters array with the new letter
              setWrongLetters((currentLetters) => [...currentLetters, letter]);
            } else {
              // Show a notification when the wrong letter is pressed again
              show(setShowNotification);
            }
          }
        }}
      />
      )}
    </>
  );
}

export default App;

