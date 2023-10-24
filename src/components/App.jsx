import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Searchbar />
      <ImageGallery />
      
    </Container>
  );
};
