import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'


class BookSearch extends Component{

    state={
        query:'',
        }

    updateQuery= async(event)=>{
        
        try{
            this.setState(()=>({
                query:event
            }))

               const newBooks=await BooksAPI.search(this.state.query)
               console.log(newBooks)
            }
        catch(error){
            console.log(error)
        }
    }

render(){

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
              <ol className="books-grid"></ol>
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