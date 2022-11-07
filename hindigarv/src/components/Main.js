const Main = function() {
    return (
        <div className="main roundedCorner">
        <textarea className="editor roundedCorner">
            {
                `हिन्दी गर्व में आप का स्वागत है।
क्या आप को जानना है कि आप की हिन्दी में कोई विदेशी भाषा के शब्द है कि नहीं?
तो इस विभाग में अपना वाक्य लिखे।

उदाहरण: 
निम्न लिखित वाक्य में ३ विदेशी शब्द है।
"में दस साल से इंतज़ार कर रहा था इस टाइम का।"

उपरोक्त वाक्य में "साल" एक फ़ारसी शब्द है
TODO
`
            }
</textarea>
        </div>
    );
};
export default Main;