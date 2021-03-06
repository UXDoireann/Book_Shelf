import React, {Component} from 'react'
import ShelfSelect from './ShelfSelect'
import {Link} from 'react-router-dom'


class BookShelf extends Component{
    
    
  

    render(){

        const currentlyReading = this.props.books.filter(book=>book.shelf === 'currentlyReading');
        const wantRead = this.props.books.filter(book=>book.shelf === 'wantToRead');
        const alreadyRead = this.props.books.filter(book=>book.shelf==='read');

        
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
           <div className="list-books-content">
           <div className= "bookshelf">
           
                <h1 className="bookshelf-title">Currently Reading</h1>
                <ol className = "books-grid">
                {currentlyReading.map(book=>(
                     <li key ={book.title}> 
            
                     <div className="book-cover" 
                     style={{width:128, height:188, backgroundImage: `url(${book.imageLinks.thumbnail})`}}/>
                     <div className ="book-title" > {book.title} </div> 
                     <div className ="book-authors" >{book.authors}</div>
                    <ShelfSelect className="shelf-book-changer" changeShelf={this.props.changeShelf} book={book} />
                   
                    </li>))}
                    </ol>
                    </div>
            <div  className="bookshelf">
            <h1 className="bookshelf-title">Want to Read</h1>
            <ol className = "books-grid">
            {wantRead.map(book=>(
                <li key ={book.title}> 
                     <div className="book-cover" 
                     style={{width:128, height:188, backgroundImage: `url(${book.imageLinks.thumbnail})`}}/>
                     <div className ="book-title" > {book.title} </div> 
                     <div className ="book-authors" >{book.authors}</div>
                    <ShelfSelect className="shelf-book-changer" changeShelf={this.props.changeShelf} book={book} />
                    </li>
                
            ))}</ol>
            </div>
            <div className= "bookshelf" >
            <h1 className="bookshelf-title">Read</h1>
            <ol className = "books-grid">
            {alreadyRead.map(book=>(
                <li key ={book.title}> 
                     <div className="book-cover" 
                     style={{width:128, height:188, backgroundImage: `url(${book.imageLinks.thumbnail})`}}/>
                     <div className ="book-title" > {book.title} </div> 
                     <div className ="book-authors" >{book.authors}</div>
                    <ShelfSelect className="shelf-book-changer" changeShelf={this.props.changeShelf} book={book} />
                    </li>
                
            ))}</ol>
            </div>


</div>
<div className="open-search">
   
<Link 
to='/search'
className="open-search"><button></button>
   
</Link>

</div>

</div>
                )
}
}
              
            


               
 



export default BookShelf