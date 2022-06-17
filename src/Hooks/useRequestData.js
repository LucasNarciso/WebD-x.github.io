import axios from "axios";
import { useState, useEffect } from "react";

export const useRequestData = (url) => {

    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const getData = (url) => {
        setIsLoading(true);
        axios.get(url).then((response) => {
            setData(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        getData(url);
    }, [url]);

    return [data, isLoading, error]
}