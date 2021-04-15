import React, {Component} from 'react'
//import ShelfSelect from './ShelfSelect'
//import BooksApp from './App'

class BookList extends Component{

/*state ={
    books:[]
}*/


   
  

    render(){

/*const {books}=this.props;
console.log('Props',props)*/
        
        return(
            <div>
           <h1 className="bookshelf-title">Currently Reading</h1>
            <ol className = "books-grid">
 
                {this.props.books.map((book)=>
                   <li key ={book.title}> 
                        <div className="book-cover" 
                        style={{width:128, height:188, backgroundImage: `url(${book.imageLinks.thumbnail})`}}/>
                        <div className ="book-title" > {book.title} </div> 
                    
                        <div className ="book-authors" >{book.authors}</div>
                        
                       </li>
                
                  )}
                  </ol>
            </div>

        )
    }
}



export default BookList