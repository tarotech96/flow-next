import { Card } from 'flowbite-react';
import React from 'react';
import Heading5 from '../../atoms/typography/Heading5';
import Paragraph from '../../atoms/typography/Paragraph';

type PropsType = {
  title: string;
  content: string;
}

const DefaultCard:React.FC<PropsType> = ({title, content}) => {
  return (
    <Card>
      <Heading5 title={title} />
      <Paragraph content={content} />
    </Card>
  );
};

export default DefaultCard;
