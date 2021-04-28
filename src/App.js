import React from 'react'
import './App.css'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {

    books:[],
    screen:'bookshelf',

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

 
  changeShelf=(book,shelf)=>{
    BooksAPI.update(book, shelf).then((res) => {
    this.setState((currentState)=>({
      books: currentState.books.filter((bk)=>bk.id!==book.id).concat({...book, shelf})}))})}
      
     
    
  

  render() {
    return (
      <div>
        <Route exact path='/' render={()=>(
      <BookShelf books={this.state.books}
      changeShelf={this.changeShelf}
      onNavigate={()=>{this.setState(()=>({screen:'search'}))}}/>
        )}/>
      
      <Route path='/search' render={()=>(
        <BookSearch books={this.state.books} 
        changeShelf={this.changeShelf}/>
      )}/>
  
      </div>
    )
  }
}
     


export default BooksApp
