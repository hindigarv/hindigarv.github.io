import React, { useState, useRef } from "react";

import parseCSV from "./csv-parser"

import {csvContent} from "./csv-content"

function TextPad() {

  const [state, setState] = useState('');
  const [words, setWords] = useState([]);

  const handleChange = (e) => {
    let text = e.target.value
      setState(text);
      let wordsFound = text.trim().split(/\s+/)
                .map(it => expandedDict[it])
                .filter(it => it!=undefined)
                .filter(it => typeof it === 'object');
                console.log("wordsFound = ", wordsFound)
                setWords(wordsFound)
    };

  const arrayToWordObj = (headerRow, dataRow) => {
    let word = {}
    for (let i = 0; i < 8; i++) {
      word[headerRow[i]] = (dataRow[i] === undefined) ? undefined : dataRow[i].trim();
    }
    return word;
  }

  const expand = (dict) => {
    let eDict = {}
    dict.forEach(word => {
      eDict[word.word] = word;
      word.roop.split(",")
      .map(roop => roop.trim())
      .filter(roop => roop != "")
      .forEach(roop => {
        eDict[roop] = word;
      });
    });
    return eDict;
  }

  let dictRows = parseCSV(csvContent);
  dictRows.shift() // skip first line which is header
  let headerRow = ["word", "mool" ,"paryay" ,"moolBhashaMe","roop","blank","withNukta", "reference"]
  let dict = dictRows.map(dataRow => arrayToWordObj(headerRow, dataRow));
  let expandedDict = expand(dict);

  // console.log("expandedDict = ", expandedDict)

  return (
    <div>
    <textarea cols={120} rows={15} value={state} onChange={handleChange} />
    <div>
      <ul>
      {words.map((word) => <li>{word.word}</li>)}
      </ul>
    </div>
    </div>
  );
}

export default TextPad;
