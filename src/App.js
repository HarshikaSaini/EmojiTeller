import React, { useState } from "react";
import "./styles.css";

var emojiDictonery = {
  "😃": "Smiling",
  "😉": "Winking",
  "🤔": "Thinking Face",
  "🤑": "Money Mouth Face",
  "😐": "Neutral Face",
  "😛": "Face with tongue",
  "🤪": "Zany Face",
  "❤️": "Red Heart",
  "💔": "Broken Heart",
  "🌋": "Volcano Heart",
  "🍇": "Grapes",
  "🥭": "Mango",
  "🍒": "Cherry",
  "🥝": "Kiwi Plant",
  "💥": "Collision",
  "💦": "Sweat Droplets"
};
export default function App() {
  var emojiWeKnow = Object.keys(emojiDictonery);
  const [meaning, setEmoji] = useState("");
  function inputTextHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictonery[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji !!";
    }
    setEmoji(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictonery[emoji];
    setEmoji(meaning);
  }

  return (
    <div className="App">
      <input
        onChange={inputTextHandler}
        placeholder="Search Emoji Here !!"
      ></input>
      <div className="outputContainer"> Meaning:{meaning}</div>
      <h3>Emojis we have </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              margin: "10px",
              fontSize: "2rem",
              padding: "2rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
