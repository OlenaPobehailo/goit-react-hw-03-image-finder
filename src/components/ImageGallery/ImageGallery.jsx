import ImageGalleryItem from 'components/ImageGalleryItem';

import { StyledImageGallery } from './ImageGallery.styled';

const ImageGallery = ({ images = [] }) => {
  console.log('ImageGallery', images);
  return (
    <StyledImageGallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} {...image} />
      ))}
    </StyledImageGallery>
  );
};

export default ImageGallery;
