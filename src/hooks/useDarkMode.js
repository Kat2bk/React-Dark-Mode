import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";

 const useDarkMode = (initialValue) => {
    const [values, setValues] = useLocalStorage('darkMode', initialValue);
    console.log(values)
        if (values === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }

    return [values, setValues]
}

export default useDarkMode;

// did not need useEffect???