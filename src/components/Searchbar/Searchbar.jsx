import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import { StyledSearchbar } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchStr: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({
      searchStr: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setQuery({ query: this.state.searchStr });
    this.setState({ searchStr: '' });
  };

  render() {
    return (
      <StyledSearchbar>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span className="button-label"></span>
            <BsSearch size="24px" />
          </button>
          <input
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </StyledSearchbar>
    );
  }
}

export default Searchbar;
