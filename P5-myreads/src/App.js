import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import { Link } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {

    // 获取书目
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response =>{

      newBook.shelf = newShelf

      const updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

      // 更新书籍信息
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={( { history }) => (
          <Search
            books={ books }
            changeShelf={ this.changeShelf }
          />
        )} />
        <Route exact  path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Steve的阅读清单</h1>
            </div>
            <BookList
              books={ books }
              changeShelf={ this.changeShelf }
            />
            <div className="open-search">
              <Link to="/search">搜索</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
