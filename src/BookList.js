import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'

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

            <ol className = "book-list">
                {this.state.books.map((book)=>(
                    <li key={book.title}>{book.title}</li>
                ))}
            </ol>

        )
    }
}



export default BookList