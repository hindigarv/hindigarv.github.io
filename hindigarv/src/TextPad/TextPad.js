import React, { useState, useRef } from "react";
import Grid from '@mui/material/Grid';

import "./TextPad.css"
import parseCSV from "./csv-parser"
import {csvContent} from "./csv-content"
import Result from "./Result/Result"

function TextPad() {

  const [state, setState] = useState('');
  const [words, setWords] = useState([]);

  const handleChange = (e) => {
    let text = e.target.value
      setState(text);

      // let wordsFound = [...new Set(text.trim().split(/\s+/))]
      let wordsFound = text.trim().split(/\s+/)
                .map(it => expandedDict[it])
                .filter(it => it!=undefined)
                .filter(it => typeof it === 'object');

      // Find counts
      let counts = wordsFound.reduce((p, word) => {
        if (!p.hasOwnProperty(word.word)) {
          p[word.word] = 0;
        }
        p[word.word]++;
        return p;
      }, {});

      // Update words with count property
      wordsFound.map(it => it.count=counts[it.word])

      // Remove duplicares
      wordsFound = wordsFound.filter((v,i,a)=>a.findIndex(v2=>(v2.word===v.word))===i)
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
    <Grid container justifyContent="center" >
      <Grid item xs={10}>
        <textarea rows={15} value={state} onChange={handleChange} style={{width: '100%'}} />
      </Grid>
      <Grid item xs={10}>
        <Result words={words} />
      </Grid>
    </Grid>
  );
}

export default TextPad;
