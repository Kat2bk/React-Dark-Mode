import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";

 const useDarkMode = (initialValue) => {
    const [values, setValues] = useLocalStorage('darkMode', initialValue);

    const prefersDarkMode = usePrefersDarkMode();
    const enabled = typeof values !== 'undefined' ? values : prefersDarkMode;

    useEffect(() => {
        if (enabled === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [enabled])

    return [values, setValues]
}

function usePrefersDarkMode() {
    return useMedia(['(prefers-color-scheme: dark-mode)'], [true], false);
}

export default useDarkMode;

// did not need useEffect???