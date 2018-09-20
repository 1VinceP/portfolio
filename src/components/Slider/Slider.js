import React from 'react';
import { Carousel } from 'react-bootstrap';
// import './carousel.css';

export default function Slider({ images, link }) {

    let image = images.map( (image, i) => {
        return (
            <Carousel.Item key={i}>
                { link
                    ? <a href={link} target='_blank' rel='noopener noreferrer'>
                        <img src={image} />
                    </a>
                    : <img src={image} />
                }
            </Carousel.Item>
        )
    } )

    return (
        <Carousel controls={images.length > 1} indicators={images.length > 10} interval={0}>
            {image}
        </Carousel>
    )
}