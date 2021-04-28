import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import ShelfSelect from './ShelfSelect'


class BookSearch extends Component{

    state={
        query:'',
        books:[],
        }

    updateQuery= async(event)=>{
        
            this.setState(()=>({query:event}))
            console.log(event)
            const getNewBooks= await BooksAPI.search(event)
            
            try{  
             if (getNewBooks.length>1){
              this.setState(()=>({books: getNewBooks,}))}
               console.log(getNewBooks)
               console.log(this.state.books)
               return getNewBooks
               }
              catch(error){
              console.log(error)
             }
        
        }


            

            
        
     
 

render(){
  const searchBooks = this.state.books
 

  const noShelf=(book)=>{
    book["shelf"]="none";
  }

  searchBooks.forEach(noShelf);
    
    return(
        <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
             <div className="search-books-input-wrapper">
    <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" >Close</button>
        <div className="search-books-input-wrapper">
            <input type="text" 
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event)=>this.updateQuery(event.target.value)}/>

        </div>
        </div>
            </div>
            
            <div className="search-books-results">
         
              <ol className="books-grid">
              {this.state.books.map(book=>(
                     <li key ={book.id}> 
            
                     <div className="book-cover" 
                     style={{width:128, height:188, 
                   
                     backgroundImage: `url(${book.imageLinks.thumbnail})`}}/>
                     <div className ="book-title" > {book.title} </div> 
                     <div className ="book-authors" >{book.authors}</div>
                    <ShelfSelect className="shelf-book-changer" changeShelf={this.props.changeShelf} book={book} />
                   
                    </li>))}
              </ol>
            </div>
              </div>
                </div>
                </div>
               ) : (
         
                            
                           
          
                <div className="open-search">
                  <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            
            )}
          </div>


    )
}
}

export default BookSearch