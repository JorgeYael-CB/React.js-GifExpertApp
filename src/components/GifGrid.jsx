import GifGridItem from "./GifGridItem.jsx";
import { useFetchGifs } from '../hooks/useFetchGifs.js';




export default function GifGrid( {category} ) {
    const {Images, IsLoading} = useFetchGifs(category);





    return (
        <>
            <h3>{category}</h3>
            {
                IsLoading && (<h2>Loading...</h2>)
            }

            <div className="card-grid">
                { Images.map( ( img ) => (
                        <GifGridItem
                        key={img.id}
                        {...img }
                    />
                )) }
            </div>
        </>
    )
}
