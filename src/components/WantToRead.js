import React,{Component} from 'react'
import BookOptions from './BookOptions'
class WantToRead extends Component{
render(){
return(
  <ol className="books-grid">
{this.props.wanttoread.map((want_read)=>(
                      <li key={want_read.title}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ 
                            backgroundImage:`url(${want_read.imageUrl})`,
                            width: 128,
                             height: 193}}></div>
                             <BookOptions book_status={want_read.status}/>
                             </div>
                           <div> 
                 <div className="book-title">{want_read.title}</div>
               <div className="book-authors">{want_read.author}</div>
               </div>
                              
                        </div>
                      </li>
                     
    
))}
</ol>
)
}
}

export default WantToRead