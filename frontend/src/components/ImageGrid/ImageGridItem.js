import React from 'react';
import styled from 'styled-components';
import DownloadFile from '../GlobalComponents/DownloadFile';
import Text from '../GlobalComponents/Text';
import ImageGrid from './ImageGrid';
import { ExpoIrapuato } from '../../assets/data/ExpoIrapuato';
import ResultadosIrapuato2021 from '../../assets/downloads/ResultadosIrapuato2021.pdf';

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
  photos = ExpoIrapuato,
  link = ResultadosIrapuato2021,
}) {
  return (
    <ImageGridStyle>
      <h1 className="postItem_heading">{title}</h1>
      <Text>{desc}</Text>
      <DownloadFile href={link} />
      <ImageGrid photos={photos} />
    </ImageGridStyle>
  );
}
