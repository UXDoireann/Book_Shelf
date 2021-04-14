/*import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'


class BookSearch extends Component{

    state ={
        query:""

     
    }

    componentDidMount(){
        BooksAPI.search(this.state.query)
         .then((query)=>{
           this.setState(()=>({
             query
           }))
           console.log(query)
         })
        }

render(){

    return(

        <form>
            {this.state.query}
        </form>


    )
}
}

export default BookSearch*/