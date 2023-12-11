import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGif = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    //La llamada a la funcion solo ejecutara una vez
    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    };
}

export default useFetchGif;