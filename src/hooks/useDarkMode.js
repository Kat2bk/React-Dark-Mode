import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = () => {
    const [values, setValues] = useLocalStorage('darkMode');

    return [values, setValues]
}