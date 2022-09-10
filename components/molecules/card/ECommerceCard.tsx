import { Card } from 'flowbite-react';
import React from 'react';
import { Product } from '../../../types/types';
import Button from '../../atoms/button/Button';
import Star from '../../atoms/Star';
import Heading5 from '../../atoms/typography/Heading5';
import Span from '../../atoms/typography/Span';

type PropsType = {
  product: Product;
};

const ECommerceCard: React.FC<PropsType> = ({ product }) => {

  const renderStars = (numStar: number) => {
    const listStars = []
    for(let i = 1; i <= numStar; i ++) {
      if (!Number.isInteger(i)) {
        listStars.push(<Star filled={false} />)
      } else {
        listStars.push(<Star filled={true} />)
      }
    }

    return listStars
  }
  return (
    <div className="max-w-sm">
      <Card imgAlt={product.description} imgSrc={product.image}>
        <a href="#">
          <Heading5 title={product.name} />
        </a>
        <div className="mt-2.5 mb-5 flex items-center">
          {renderStars(product.numStar)}
         <Span
            title={`${product.numStar.toString()} out of 5`}
          /> 
        </div>
        <div className="flex items-center justify-between">
          <Span 
            title={`$${product.price.toFixed(2)}`}
            /> 
          <Button 
            buttonLabel='Add to cart'
            color='success'
            size='sm'
            handleFn={() => alert('Added the product into cart')}
            /> 
        </div>
      </Card>
    </div>
  );
};

ECommerceCard.defaultProps = {
  product: {
    name: 'Iphone14 Pro max',
    price: 1199,
    image:
      'https://m-cdn.phonearena.com/images/article/141931-wide-two_350/Hands-on-impressions-of-iPhone-14-Pro-and-Pro-Max-shared-by-lesser-known-leaker.jpg?1660631277',
    description: 'Iphone14 Pro Max in colors pink, silver, and black',
    numStar: 5,
  },
};

export default ECommerceCard;
