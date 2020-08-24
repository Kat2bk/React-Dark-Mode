import {useState} from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        console.log("useLocalStorage", key, initialValue)
        // const item = window.localStorage.getItem(key)
        // return item ? JSON.parse(item) : initialValue
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue));
    })

    // const setValue = (value) => {
    //     setStoredValue(value);
    //     window.localStorage.setItem(key, JSON.stringify(value));
    // }

    return [storedValue, setStoredValue];
}