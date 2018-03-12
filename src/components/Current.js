import React,{Component} from 'react'
import BookOptions from './BookOptions'
 
 class Current extends Component{
   
render(){
 return(
  <ol className="books-grid">
{this.props.currentbook.map((current_book)=>(
                      <li key={current_book.title}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ 
                            backgroundImage:`url(${current_book.imageUrl})`,
                            width: 128,
                             height: 193}}></div>
                             <BookOptions book_status={current_book.status}/>
                             </div>
                           <div> 
                 <div className="book-title">{current_book.title}</div>
               <div className="book-authors">{current_book.author}</div>
               </div>
                              
                        </div>
                      </li>
                     
    
))}
</ol>
)
}
}
export default Current


  