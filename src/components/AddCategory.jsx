import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState("Dragon Ball");

    const onInputChanged = (e) => {
        setInputValue( e.target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        /*onNewCategory( categories => [ inputValue, ...categories] ); */
        onNewCategory( inputValue );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ (e) => onInputChanged(e) }
            />
        </form>
    );
}