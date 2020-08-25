import React, {useState, useEffect} from "react";
import axios from "axios";
import Update from "./Update";

const StatusUpdates = () => {
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/status_updates/")
        .then(response => {
            setUpdates(response.data)
        })
        .catch(error => {
            console.log("Unable to get data", error)
        })
    }, [])

    return (
        <div>
        {Object.values(updates).map(update => (
            <Update
            key={Date.now()} 
            description={update.description}
            user={update.user}
            usertitle={update.user_title}
            project={update.project}
            />
        ))}
        </div>
    )
}

export default StatusUpdates;