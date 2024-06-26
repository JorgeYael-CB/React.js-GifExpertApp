// https://es.legacy.reactjs.org/docs/faq-structure.html  -- estructura de archivos
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";



export function GifExpertApp() {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);


    const onAddCategory = (newCategory) => {
        if( !newCategory ) return;
        if( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);
    };


    return (
        <>
            <h1>Gif Expert App</h1>


            <AddCategory onNewCategory={onAddCategory} />


            {
                categories.map( category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    );
};