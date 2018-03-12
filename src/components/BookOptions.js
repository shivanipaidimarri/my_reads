import React,{Component} from 'react'
class BookOptions extends React.Component{
  render(){
  const bookstatus= [
    {bookstat:'Move To'},
    {bookstat:'currently Reading'},
    {bookstat:'Want to Read'},
    {bookstat:'Read'},
    {bookstat:'none'}
    ]
    const book = this.props.book_status
    
    for(const i=0;i<=4;i++)
    {
      if(bookstatus[i].bookstat===book)
      bookstatus[i].bookstat='\u2713'+book;
    
    }
      
  
  
    return <div className="book-shelf-changer" >
   <select>
    <option disabled>{bookstatus[0].bookstat}</option>
    <option>{bookstatus[1].bookstat}</option>
    <option>{bookstatus[2].bookstat}</option>
    <option >{bookstatus[3].bookstat}</option>
    <option>{bookstatus[4].bookstat}</option>
    </select>
   </div>
}
 }
export default BookOptions;