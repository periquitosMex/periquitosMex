import React from 'react';
import Burger from '../Burger/Burger';
import Text from '../GlobalComponents/Text';

export default function PostItem({
  title = 'Heading',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et voluptatibus libero vero atque praesentium corrupti qui asperiores numquam quam.',
}) {
  return (
    <div>
      <div className="postItem_heading">{title}</div>
      <Text>{desc}</Text>
      <Burger />
    </div>
  );
}
