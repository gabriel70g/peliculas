import React from 'react';
import '../assets/Carousel.scss';


function Carousel({ Children })  {
    return (

<section className="carousel">
    <div className="carousel__container">
        { Children }
    </div>
</section>
    );
}

export default Carousel