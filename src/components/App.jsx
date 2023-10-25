import ImageGalleryPage from './ImageGalleryPage';
import Searchbar from './Searchbar';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Searchbar />
      <ImageGalleryPage />
    </Container>
  );
};
