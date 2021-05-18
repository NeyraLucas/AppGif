import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'League of legends'];
    const [categories, setCategories] = useState(['League of legends']);

    return (
        <>
            <h2>App de Gifs</h2>
            <AddCategory setCategories={setCategories} />
        
            <ul className="contenedor">
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category = {category}
                        />
                    ))
                }
            </ul>


        </>
    )
}
