import React from 'react'
import { data } from '../data'

export default function DuneBooks() {



  return (
    <div>{data.map((item, index) => (
        <div className='book' key={index}>
            <div className='bookname'>
                <div><h2>Book: {item.name},</h2> 
                <h4>Author: {item.author}</h4>
                {item.description}</div>
                
            </div>
            <div>
                <img className='bookimage' src={item.bookPicture} alt="bookcover" />
            </div>
        </div>
      ))}
      </div>
  )
}
