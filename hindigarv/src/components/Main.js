import {useState} from "react";
import {find} from "./hindigarv.js"

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
    const [result, setResult] = useState([])

    const handleChange = function (event) {
        setResult(find(event.target.value));
    }

    return (
        <>
            <main>
                <div className="in">
                    <textarea className="editor" onChange={handleChange} defaultValue={text}></textarea>
                </div>
                <div className="out">
                    <ul>
                        {result.map(word => <li key={word.shabda}>{word.shabda} ({word.mool}) -> {word.paryaya}</li>)}
                    </ul>
                </div>
            </main>
            <div className="side">
                <div className="icon">
                    <a href="http://www.t.co/1123">
                        <img src="./img/icons8-twitter-48.png" height="48" width="48" />
                    </a>
                </div>
                <div className="icon">
                    <a href="http://www.google.com/123">
                        <img src="./img/icons8-chrome-48.png" alt="Install Chrome Extension" height="48" width="48" />
                    </a>
                </div>
                <div className="icon">
                    <a href="http://www.google.com/123">
                        <img src="./img/icons8-telegram-app-48.png" alt="Checkout the Telegram bot"
                             height="48" width="48" />
                    </a>
                </div>
            </div>
        </>
    );
};
export default Main;