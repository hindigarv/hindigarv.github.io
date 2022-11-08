import {} from "nukta-remover"
import Papa from "papaparse"
import {generateValuesFromRegex} from "regex-val-gen";

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnYyZxqwSjM3IPG9TchbZcAUDNM_Y4zbZCFjimzQKVjQpNNinNRj4CeWzXaHDNcDEJ_EPOrtBLycRD/pub?gid=0&single=true&output=tsv";

class Word {
    constructor(shabda, mool, paryaya, roops, regex) {
        this.shabda = shabda;
        this.mool = mool;
        this.paryaya = paryaya;
        this.roops = roops;
        this.regex = regex;
    }
}

const toWord = (row) => {
    const shabda = row[0].trim().removeNukta();
    const mool = row[1].trim();
    const paryaya = row[2].trim();
    if ("शब्द" === shabda || shabda === "" || mool === "" || paryaya === "") {
        return null;
    }
    const roops = row[4].removeNukta().split(",").map(r => r.trim());
    const regex = row[5].trim();
    return new Word(shabda, mool, paryaya, roops, regex);
}

function getRoops(word) {
    let roops = word.roops;
    roops.push(word.shabda)
    generateValuesFromRegex(word.regex).forEach(v => roops.push(v))
    return [...new Set(roops)]
}

let shabdakosha = null;

Papa.parse(url, {
    download: true,
    complete: function (results) {
        shabdakosha = results.data
            .map(row => toWord(row))
            .filter(word => word != null)
            .reduce((acc, word) => {
                getRoops(word).forEach(roop => acc[roop] = word)
                return acc;
            }, {})
        console.log("shabdakosha is ready")
    }
})

export const find = (str) => {
    if (shabdakosha == null) {
        console.log("shabdakosha is not initialized yet.")
        return;
    }
    // return [];
    return str.split(" ")
        .map(token => token.trim())
        .map(token => shabdakosha[token])
        .filter(token => token != null)
}
