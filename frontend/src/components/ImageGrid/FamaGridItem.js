import React from 'react';
import styled from 'styled-components';
import Text from '../GlobalComponents/Text';
import Fame from '../../assets/data/Fame';
import FameGrid from './FameGrid';

const ImageGridStyle = styled.div`
  max-width: 100vw;
  margin-top: 2rem;
  background-color: white;
  padding: 2rem;
  border: 1px solid #f5e37c;
  border-radius: 15px;
  white-space: pre-line;
  h1.postItem_heading {
    margin: 1.8rem 0 4.5rem;
    font-size: 3.5rem;
  }
  .bold-text {
    font-family: 'Roboto Bold';
  }
  @media only screen and (max-width: 768px) {
    .postItem_heading {
      font-size: 1.1rem;
      margin: 1.5rem 0 2rem;
    }
  }
`;

export default function ImageGridItem({
  title = 'Heading',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et voluptatibus libero vero atque praesentium corrupti qui asperiores numquam quam.',
  photos = Fame,
}) {
  return (
    <ImageGridStyle>
      <h1 className="postItem_heading">{title}</h1>
      <Text>{desc}</Text>
      <FameGrid photos={photos} />
    </ImageGridStyle>
  );
}
