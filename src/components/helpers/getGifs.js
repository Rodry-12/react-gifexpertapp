
 // Esta funcion es para traer las imagenes, y luego lo convertimos a un objeto
 export const getGifs = async ( category ) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=Jk2VUpgILUAtSVI9SAH9F1Us8uAwvXj1`;
      // encodeURI reemplaza los espacios por otra cosa
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    
    return gifs;
    
  };