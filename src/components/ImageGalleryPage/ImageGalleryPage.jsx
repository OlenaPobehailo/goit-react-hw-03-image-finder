import { Component } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'services/api';

class ImageGalleryPage extends Component {
  state = {
    loading: false,
    error: null,
    images: [],
  };

  async componentDidMount() {
    try {
      const { total, hits, totalHits } = await fetchImages();
      console.log(total, hits, totalHits);
      this.setState({ images: hits });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <h2>{this.state.error}</h2>
        <ImageGallery images={images} />
      </>
    );
  }
}

export default ImageGalleryPage;
