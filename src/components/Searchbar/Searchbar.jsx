import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import { StyledSearchbar } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({
      input: target.value,
    });
  };

  render() {
    return (
      <StyledSearchbar>
        <form>
          <button type="submit">
            <span className="button-label"></span>
            <BsSearch size='24px'/>
          </button>
          <input
            type="text"
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
