import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }

  render() {
    const { book, books, changeShelf } = this.props

    let currentShelf = 'none'

    for (let item of books ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf
        break
      }
    }

    return (
      <div className="book-shelf-changer">
        <select  onChange={(event) => changeShelf(book, event.target.value)}
          defaultValue={ currentShelf }>
          <option value="none" disabled>移动到...</option>
          <option value="currentlyReading">正在阅读</option>
          <option value="wantToRead">计划阅读</option>
          <option value="read">已读书目</option>
        </select>
      </div>
    )
  }

}

export default ShelfChanger
