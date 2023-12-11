import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GiphyApp = () => {

    const [categories, setCategories] = useState([ 'Naruto' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;

        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>
            <h1>Giphy App</h1>
            
            {/*Al componente AddCategory podemos enviarle la funcion setCategories del useState directamente */}
            <AddCategory 
                //onSetCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />
            {/*<button onClick={ onAddCategory }>Agregar</button>*/}

            
            { categories.map( ( category ) => <GifGrid key={category} category={category} />) }
        </>
    )
}

export default GiphyApp;