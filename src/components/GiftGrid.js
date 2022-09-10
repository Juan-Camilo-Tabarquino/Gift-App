import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GiftGrid = ({category}) => {

    const { data:images ,loading } = useFetchGifs( category );

    console.log(loading);

  return (
    <>

        <h1>{category}</h1>

        <div className="card-grid">
                {loading && <p className="animate__animated animate__flash">Loading</p>}
                {
                    images.map(img => (

                        <GifGridItem key={img.id} {...img} />

                    ))
                }
        </div>

    </>
  )

}
