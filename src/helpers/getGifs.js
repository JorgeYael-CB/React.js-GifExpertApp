export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=21r5HnqFlf1QpS9Dov9i1n8v5sNFoO0C&q=${ category }&limit=10`;
    const response = await fetch(url)
    const { data }  = await response.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs;
};