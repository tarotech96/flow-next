import React from "react";
import {Carousel as FlowbiteCarousel} from 'flowbite-react'
import Image from "../../atoms/Image";

const Carousel:React.FC<{
  numOfSlide: number
}> = ({numOfSlide = 5}) => {

  const renderSlides = (numOfSlide: number) => {
    const sliders = []
    for(let i = 1; i <= numOfSlide; i++) {
      sliders.push(<Image src={`https://flowbite.com/docs/images/carousel/carousel-${i}.svg`} alt={`slide-${i}`} />)
    }
    return sliders
  }
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <FlowbiteCarousel>
      {renderSlides(numOfSlide)}
      </FlowbiteCarousel>
    </div>

  )
}

export default Carousel
