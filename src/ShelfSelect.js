import React, {Component} from 'react';

class ShelfSelect extends Component{

  render(){

    return(

       <div className="book-shelf-changer">
      <select >
        <option value="move" >Move to...</option>
        <option value="currentlyReading" onClick={()=>this.props.onChangeShelf()}>Currently Reading</option>
        <option value="wantToRead" onClick={()=>this.props.onChangeShelf()}>Want to Read</option>
        <option value="read" onClick={()=>this.props.onChangeShelf()}>Read</option>
        <option value="none">None</option>
      </select>
  </div>
    )
  }

}

export default ShelfSelect