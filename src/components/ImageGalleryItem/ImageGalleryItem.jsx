import { StyledImageGalleryItem } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <StyledImageGalleryItem>
      <img src={webformatURL} alt="" />
    </StyledImageGalleryItem>
  );
};

export default ImageGalleryItem;
