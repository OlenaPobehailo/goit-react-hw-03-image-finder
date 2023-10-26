import ImageGalleryItem from 'components/ImageGalleryItem';

import { StyledImageGallery } from './ImageGallery.styled';

const ImageGallery = ({ toggleModal, images = [] }) => {
  return (
    <StyledImageGallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} toggleModal={toggleModal} {...image} />
      ))}
    </StyledImageGallery>
  );
};

export default ImageGallery;
