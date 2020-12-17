import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🤣": "Laughing",
  "🥶": "Cold",
  "😈": "Devil",
  "😴": "Sleepy"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [inputEmoji, setInputEmoji] = useState("");

  function onChangeEventHandler(event) {
    console.log(event.target.value);

    let inputEmoji = event.target.value;
    setInputEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setInputEmoji(emojiDictionary[inputEmoji]);
    }
    setInputEmoji("Not available in database");
  }

  function emojiHandler(emoji) {
    console.log(emoji);
    setInputEmoji(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1> Meanings behind emotions </h1>
      <input onChange={onChangeEventHandler}></input>
      <h2> Meaning of Emoji: {inputEmoji} </h2>
      <h3>
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              onClick={() => emojiHandler(emoji)}
              style={{ cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </h3>
    </div>
  );
}
