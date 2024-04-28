import { useState, useEffect } from "react";
import {getGifs} from "../helpers/getGifs.js";


export const useFetchGifs = ( category ) => {
    const [Images, setImages] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);


    useEffect( () => {
        getGifs( category )
            .then( newImages => setImages(newImages) );

        setIsLoading(false);
    }, []);



    return {
        Images,
        IsLoading,
    }
}
