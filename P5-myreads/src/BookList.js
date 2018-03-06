import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = { shelfChange: false }

  render() {
    const { books, changeShelf } = this.props
    const shelfTypes = [{ type: 'currentlyReading', title: '正在阅读' },
                        { type: 'wantToRead',  title: '计划阅读' },
                        { type: 'read', title: '已读书目'}]

    return (
      <div className="list-books-content">
        {shelfTypes.map((shelf, index) =>  {
          const shelfBooks = books.filter( book => book.shelf === shelf.type)
          return  (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{ shelf.title }</h2>
              <div className="bookshelf-books">
                <BookShelf
                  books={ shelfBooks }
                  changeShelf={ changeShelf }
                />
              </div>
            </div> )
        })}
      </div>
    )
  }
}

export default BookList
