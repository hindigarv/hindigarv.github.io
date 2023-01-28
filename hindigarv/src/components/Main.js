import {useEffect, useState} from "react";
import {find} from "./hindigarv.js"
import SideBar from "./SideBar";
import useHindigarv from "../useHindigarv";
import CircularProgress from '@mui/material/CircularProgress';

const Main = function () {
    const initialText = `हिन्दी गर्व में आप का स्वागत है।
क्या आप को जानना है कि आप की हिन्दी में कोई विदेशी भाषा के शब्द है कि नहीं?
तो इस विभाग में अपना वाक्य लिखे।

उदाहरण: 
वह दस साल से इंतज़ार कर रहा था।

उपरोक्त वाक्य में "साल" एक फ़ारसी शब्द है, और "इंतजार" एक अरबी शब्द है।

इसी प्रकार यहाँ आप जैसे कुछ लिखेंगे उसका विश्लेषण आगे दक्षिण विभाग में दिखेगा। 

`;

    const [text, setText] = useState(initialText)
    const [result, setResult] = useState()
    const {isReady} = useHindigarv()

    useEffect(() => {
        if (isReady) {
            setResult(find(text));
        }
    }, [text, isReady])

    return (
        <>
            <main>
                <div className="in">
                    <textarea className="editor" onChange={event => setText(event.target.value)}
                              defaultValue={text}></textarea>
                </div>
                <div className="out">
                    {!isReady && <CircularProgress/>}
                    {isReady && result && <ul>
                        {result.map(word => <li key={word.shabda}>{word.shabda} ({word.mool}) -> {word.paryaya}</li>)}
                    </ul>
                    }
                </div>
            </main>
            <SideBar/>
        </>
    );
};
export default Main;