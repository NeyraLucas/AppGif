import React, {useState} from 'react'
import PropTypes from 'prop-types';

var estado = 0;
export const AddCategory = ( {setCategories} ) => {
    
    //estado
    const [inputValue, setInputValue] = useState('Buscar Gifs')
    //const para recibir info del teclado
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        estado+=1;

        if(inputValue.trim().length > 2 && estado<5){
            setCategories( c => [inputValue, ...c]);
            setInputValue('');
        }else{
            estado = 0;
            setCategories( c => [inputValue]);
            setInputValue('');
        }

        /* if( inputValue.trim().length > 2){
            setCategories( c => [inputValue, ...c]);
            setInputValue('');
        } */

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder = {inputValue} 
                onChange={handleInputChange} 
                />
            </form>
        </>
    )
}
//pide una funcion con los poptypes
AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
}