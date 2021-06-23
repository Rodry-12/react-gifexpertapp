//import React, { useState, useEffect } from "react";
import React from 'react';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
//import { getGifs } from "./helpers/getGifs";

export const GifGrid = ({ category }) => {
  //const [images, setImages] = useState([]);

  const {data, loading} = useFetchGifs( category );
  //El useEffect con el parametro [], nos  llama la funcion getGifs solo una vez.
  /*useEffect(() => {
    getGifs( category )
        .then( imgs => setImages( imgs ) );
  }, [ category ]);
  */

  return (
    <>
      <h3 className = 'animate__animated animate__fadeIn'>{category}</h3>

      { loading && <p className = 'animate__animated animate__flash'>loading...</p>}
      <div className="card-grid">
        {data &&
          data.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
      </div>
    </>
  );
};
