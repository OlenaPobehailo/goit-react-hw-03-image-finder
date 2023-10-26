import { StyledImageGalleryItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  toggleModal,
}) => {
  return (
    <StyledImageGalleryItem>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => toggleModal({ largeImageURL, webformatURL, tags })}
      />
    </StyledImageGalleryItem>
  );
};

export default ImageGalleryItem;
