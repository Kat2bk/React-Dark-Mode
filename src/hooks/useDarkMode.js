import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";
import {useMediaQuery} from "react-responsive"

 const useDarkMode = (initialValue) => {
    const [values, setValues] = useLocalStorage('darkMode', initialValue);

    const prefersDarkMode = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)"
        },
        undefined,
        values => {
         console.log("mediaquery", values)
            setValues(values);
        }
    );

    console.log("prefersDark", prefersDarkMode)

    useEffect(() => {
        if (values === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [values])

    return [values, setValues]
}

// function usePrefersDarkMode() {
//     return useMedia(['(prefers-color-scheme: dark-mode)'], [true], false);
// }

export default useDarkMode;

// did not need useEffect???
// using react-responsive library
// which uses useMediaQuery