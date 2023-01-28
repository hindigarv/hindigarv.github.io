import {useState, useEffect} from "react";
import {isShabdakoshaReady} from "./components/hindigarv";

const useHindigarv = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        function updateReadyState() {
            if (isShabdakoshaReady) {
                setIsReady(true);
            } else {
                setTimeout(updateReadyState, 1000);
            }
        }
        setTimeout(updateReadyState, 1000);
    }, []);

    return {isReady}
}

export default useHindigarv;