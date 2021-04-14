import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import ShelfSelect from './ShelfSelect'

class BookList extends Component{

state ={
    books:[]
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
   
  

    render(){


        
        return(
            <div>
            <h1 className="bookshelf-title">Currently Reading</h1>
            <ol className = "books-grid">
 
                {this.state.books.map((book)=>
                   <li key ={book.title}> 
                        <div className="book-cover" 
                        style={{width:128, height:188, backgroundImage: `url(${book.imageLinks.thumbnail})`}}/>
                        <div className ="book-title" > {book.title} </div> 
                        <ShelfSelect/>
                        <div className ="book-authors" >{book.authors}</div>
                        
                       </li>
                
                  )}
                  </ol>
            </div>

        )
    }
}



export default BookList