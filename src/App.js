import React, { useState, useEffect } from 'react';
import './App.css'
function App() {
  const [text, setText] = useState('');
  const [morseCode, setMorseCode] = useState('');

  useEffect(() => {
    // Define the Morse code mappings
    const morseCodeMappings = {
      A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.',
      F: '..-.', G: '--.', H: '....', I: '..', J: '.---',
      K: '-.-', L: '.-..', M: '--', N: '-.', O: '---',
      P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-',
      U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--',
      Z: '--..', ' ': '|'
    };

    // Function to translate text to Morse code
    const translateToMorseCode = (inputText) => {
      const sanitizedText = inputText.toUpperCase();
      const words = sanitizedText.split(' ');
      const morseCodeWords = words.map((word) => {
        const characters = word.split('');
        const morseCodeCharacters = characters.map((char) => {
          return morseCodeMappings[char] || '';
        });
        return morseCodeCharacters.join(' ');
      });
      return morseCodeWords.join('   '); // Use 3 spaces to separate words
    };

    
    setMorseCode(translateToMorseCode(text));
  }, [text]);

  return (
    <div>
      <h1>Morse Code Translator</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter text here ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
       <h2>Morse Code:</h2>
        <p>{morseCode}</p>
      
    </div>
  );
}

export default App;
