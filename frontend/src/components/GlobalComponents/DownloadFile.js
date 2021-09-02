import React from 'react';
import styled from 'styled-components';
import ResultadosIrapuato2021 from '../../assets/downloads/ResultadosIrapuato2021.pdf';
import downloadBtn from '../../assets/images/downloadBtn.png';

const DownloadFilesStyle = styled.div`
  .downloadImage {
    width: 15rem;
    height: auto;
    margin: 1.5rem;
  }
`;

export default function DownloadFile() {
  return (
    <DownloadFilesStyle>
      <a href={ResultadosIrapuato2021} download>
        <img
          src={downloadBtn}
          alt="download button"
          className="downloadImage"
        />
      </a>
    </DownloadFilesStyle>
  );
}
