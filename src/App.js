import React from 'react'
import './App.css'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'



class BooksApp extends React.Component {
  state = {

    books:[],

    //query:""
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
   showSearchPage: false
  }

  
  

  componentDidMount(){
    BooksAPI.getAll()
     .then((books)=>{
       this.setState(()=>({
         books
       }))
       console.log(books)
     })
  }

  /*componentDidMount(){
    BooksAPI.search(query)
     .then((query)=>{
       query.setState(()=>({
         query
       }))
       console.log(query)
     })
  }*/

  changeShelf=(book,shelf)=>{
    shelf = book.shelf
    this.setState((currentState)=>({
      books: currentState.books.filter((b)=>b.shelf!==shelf).concat(currentState.books, book)})}
      
     
    
  

  render() {
    return (
      <div>
      <BookSearch showSearchPage={this.state.showSearchPage}/>
      <BookShelf books={this.state.books}
                 onChangeShelf={this.changeShelf}/>
      
      
  
      </div>
    )
  }
}
     /* <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                *///}
               /* 

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
         
                            
                           
          
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>*/


export default BooksApp
