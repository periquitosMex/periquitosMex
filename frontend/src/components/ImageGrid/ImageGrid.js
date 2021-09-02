import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { ExpoIrapuato } from '../../assets/data/ExpoIrapuato';

const customStyles = {
  container: (base) => ({
    ...base,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
  }),
  headerFullscreen: () => ({
    display: 'none',
  }),
};

function ImageGrid() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={ExpoIrapuato} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              styles={customStyles}
              currentIndex={currentImage}
              views={ExpoIrapuato.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default ImageGrid;
