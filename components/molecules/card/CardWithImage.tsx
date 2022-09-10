import { Card } from 'flowbite-react';
import React from 'react';
import Heading5 from '../../atoms/typography/Heading5';
import Paragraph from '../../atoms/typography/Paragraph';

type PropsType = {
  title: string;
  content: string;
}

const CardWithImage: React.FC<PropsType> = ({title, content}) => {
  return (
    <div className="max-w-sm">
      <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
        <Heading5 title={title} />
        <Paragraph content={content}/>
      </Card>
    </div>
  );
};

export default CardWithImage;
