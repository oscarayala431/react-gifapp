
import useFetchGif from "../Hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGif( category );

    return (
        <>
            <h2>{ category }</h2>

            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <ol>
                {images.map( ({ id, title, url }) => (
                    <GifItem 
                        key={id}
                        id={id}
                        title={title}
                        url={url}
                    />
                ))}
            </ol>
            {/*Se puede colocar las props en el componente GifItem tambien de la siguiente manera
                    { ...image }
             */}
        </>
    )
}