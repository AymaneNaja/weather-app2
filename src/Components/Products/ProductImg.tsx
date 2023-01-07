import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";



export function ProductImg({
    data
}) {
    return <div className="lg:w-6/12 md:w-3/4 w-10/12 sm:w-8/12" >
        <Splide options={{
            width: '100%',
            pagination: false
        }}>
            {data.images.map(image => {
                return <SplideSlide>
                    <img className='rounded-lg shadow-2xl' src={image} />
                </SplideSlide>;
            })}

        </Splide>
    </div>;
}
