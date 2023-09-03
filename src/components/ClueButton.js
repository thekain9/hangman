import React, { useState } from "react";

const ClueButton = ({ word }) => {
  // Define word definitions
  const wordDefinitions = {
    knowledge: "Facts, information, and skills acquired through experience or education.",
    technology: "The application of scientific knowledge for practical purposes, especially in industry.",
    communication: "The imparting or exchanging of information or news.",
    programming: "The process of writing, testing, and maintaining the source code of computer programs.",
    community: "A group of people living in the same place or having a particular characteristic in common.",
    university: "An educational institution where higher education is taught and researched.",
    television: "A system for transmitting visual images and sound that are reproduced on screens, typically in people's homes.",
    information: "Facts provided or learned about something or someone.",
    celebration: "The action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
    imagination: "The faculty or action of forming new ideas or images or concepts of external objects not present to the senses.",
    organization: "An organized body of people with a particular purpose, especially a business, society, association, etc.",
    environment: "The surroundings or conditions in which a person, animal, or plant lives or operates.",
    adventure: "An unusual and exciting or daring experience.",
    discovery: "The action or process of discovering or being discovered.",
    opportunity: "A set of circumstances that makes it possible to do something.",
    chocolate: "A food product made from roasted and ground cacao seeds, typically sweetened and flavored.",
    entertainment: "The action of providing or being provided with amusement or enjoyment.",
    celebrity: "A famous person, especially in entertainment or sports.",
    experience: "Practical contact with and observation of facts or events.",
    creativity: "The use of imagination or original ideas to create something; inventiveness.",
  };

  // State to manage whether the clue is shown
  const [showClue, setShowClue] = useState(false);

  // Function to toggle the visibility of the clue
  const toggleClue = () => {
    setShowClue(!showClue);
  };

  return (
    <div className="clue-container"> 
      <button onClick={toggleClue}>I need help!</button>
      {showClue && <p>{wordDefinitions[word]}</p>}
    </div>
  );
};

export default ClueButton;
