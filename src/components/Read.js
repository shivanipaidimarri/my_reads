import React,{Component} from 'react'
import BookOptions from './BookOptions'
class Read extends Component{
render(){
return(
  <ol className="books-grid">
{this.props.read.map((reads)=>(
                      <li key={reads.title}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ 
                            backgroundImage:`url(${reads.imageUrl})`,
                            width: 128,
                             height: 193}}></div>
                             <BookOptions book_status={reads.status}/>
                             </div>
                           <div> 
                 <div className="book-title">{reads.title}</div>
               <div className="book-authors">{reads.author}</div>
               </div>
                              
                        </div>
                      </li>
                     
    
))}
</ol>
)
}
}

export default Read