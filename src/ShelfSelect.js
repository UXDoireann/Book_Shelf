import React, {Component} from 'react';




class ShelfSelect extends Component{
  state={
    value:''
 
  }
  handleChange=event=>{
    this.setState({value:event.target.value});
  }

  render(){

    return(

       <div className="book-shelf-changer">
      <select  value={this.state.value} onChange={this.handleChange}>
        <option value="move" disabled >Move to...</option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead" >Want to Read</option>
        <option value="read" >Read</option>
        <option value="none">None</option>
      </select>
  </div>
    )
  }

}

export default ShelfSelect