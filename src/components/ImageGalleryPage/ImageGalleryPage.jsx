import { Component } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'services/api';
import Button from 'components/Button';
import Searchbar from '../Searchbar/Searchbar';

class ImageGalleryPage extends Component {
  state = {
    loading: false,
    error: null,
    images: [],
    page: 1,
    query: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, per_page, query } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      try {
        const { total, hits, totalHits } = await fetchImages({
          per_page: 12,
          page,
          q: query,
        });
        console.log(this.state.query);

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleSetQuery = ({ query }) => {
    this.setState({ query });
    console.log(query);
  };

  render() {
    const { images, query } = this.state;
    return (
      <>
        <Searchbar setQuery={this.handleSetQuery} />
        {query && <h2>{query}</h2>}
        <h2>{this.state.error}</h2>
        <ImageGallery images={images} />
        <Button onClick={this.handleLoadMore}>Load more</Button>
      </>
    );
  }
}

export default ImageGalleryPage;
