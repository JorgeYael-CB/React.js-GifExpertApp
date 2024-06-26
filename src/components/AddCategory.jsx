import { useState } from "react";



export default function AddCategory( {onNewCategory} ) {
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ( {target} ) => {
        setinputValue( target.value );
    };

    const onSubmit = ( e ) => {
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        setinputValue('');
    }


    return (
        <>
            <form onSubmit={ onSubmit }>
                <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ onInputChange }
                />
            </form>
        </>
    );
}
