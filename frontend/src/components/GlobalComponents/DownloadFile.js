import React from 'react';
import styled from 'styled-components';
import downloadBtn from '../../assets/images/downloadBtn.png';

const DownloadFilesStyle = styled.div`
  .downloadImage {
    width: 15rem;
    height: auto;
    margin: 1.5rem;
  }
`;

export default function DownloadFile({ href }) {
  return (
    <DownloadFilesStyle>
      <a href={href} download>
        <img
          src={downloadBtn}
          alt="download button"
          className="downloadImage"
        />
      </a>
    </DownloadFilesStyle>
  );
}
