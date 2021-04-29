
import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import ShelfSelect from './ShelfSelect'
import {Link} from 'react-router-dom'


class BookSearch extends Component{

    state={
        query:'',
        getNewBooks:[],
        }

    updateQuery= async(event)=>{
        
            this.setState(()=>({query:event}))
            console.log(event)

            if(event!==''){
           
            const getNewBooks= await BooksAPI.search(event)
            
            try{  
             if (getNewBooks!==undefined && getNewBooks.length>1){
              this.setState(()=>({getNewBooks: getNewBooks,}))}
              else{
                this.setState(()=>({getNewBooks:[]}))
               }
               console.log(getNewBooks)
               console.log(this.state.getNewBooks)
          
               
               
               return getNewBooks
               
               }


              catch(error){
              console.log(error)
             }
        
        

    }
  }
            

render(){

  
  const searchBooks = this.state.getNewBooks
  const books = this.props.books

  searchBooks.map(searchBook=>{
    let check = books.find(shelfBook=>shelfBook.id===searchBook.id)
    searchBook.shelf= check? check.shelf:'none'
    return searchBook
  })

const booksWithImages =searchBooks.filter(book=>book.imageLinks!==undefined)

  
    return(
        <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
             <div className="search-books-input-wrapper">
            <div className="search-books">
            <div className="search-books-bar">

             <Link to='/'><button className="close-search" >Close</button></Link>

        <div className="search-books-input-wrapper">
            <input type="text" 
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event)=>this.updateQuery(event.target.value)}/>

        </div>
        </div>
            </div>
           
            <div className="search-books-results">
         
            {booksWithImages!==" " &&(
              <ol className="books-grid">
              {this.state.query!=='' &&
              booksWithImages.map(book=>(
                     <li key ={book.id}> 
            
                     <div className="book-cover" 
                     style={{width:128, height:188, 
                   
                     backgroundImage: `url(${book.imageLinks.thumbnail})`}}/>
                     <div className ="book-title" > {book.title} </div> 
                     <div className ="book-authors" >{book.authors}</div>
                    <ShelfSelect className="shelf-book-changer" changeShelf={this.props.changeShelf} book={book} />
                   
                    </li>))}
                    
              </ol>)}
               </div>
              </div>
                </div>
                </div>
              
         
  </div>           
             
          
              /*  <div className="open-search">
                  <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>*/
            
            
         

                     
    )
                     }}



export default BookSearch