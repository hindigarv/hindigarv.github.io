const SideBar = function () {
    return <div className="side">
        <div className="icon">
            <a href="https://twitter.com/HindiGarv" target="_blank" rel="noopener noreferrer">
                <img src="./img/icons8-twitter-48.png" height="48" width="48"/>
            </a>
        </div>
        <div className="icon">
            <a href="https://chrome.google.com/webstore/detail/%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80-%E0%A4%97%E0%A4%B0%E0%A5%8D%E0%A4%B5/annghchohpbikcnhhdebobkcmmjfolih"
               target="_blank" rel="noopener noreferrer">
                <img src="./img/icons8-chrome-48.png" alt="Install Chrome Extension" height="48" width="48"/>
            </a>
        </div>
        <div className="icon">
            <a href="https://t.me/HindiGarvBot" target="_blank" rel="noopener noreferrer">
                <img src="./img/icons8-telegram-app-48.png" alt="Checkout the Telegram bot"
                     height="48" width="48"/>
            </a>
        </div>
    </div>
}

export default SideBar;